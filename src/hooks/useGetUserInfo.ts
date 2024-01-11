import { getMember } from '@api/member';
import { UserInfoState } from '@recoil/Auth.atom';
import { getItem } from '@utils/localStorageFun';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const useGetUserInfo = () => {
  const setUserInfo = useSetRecoilState(UserInfoState);

  useEffect(() => {
    const getMemberInfo = async () => {
      try {
        const res = await getMember();
        if (res.data.status === 200) {
          setUserInfo(res.data.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    if (getItem('accessToken')) {
      getMemberInfo();
    }
  }, []);
};

export default useGetUserInfo;
