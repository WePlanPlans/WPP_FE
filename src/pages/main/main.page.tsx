import { getPopularTours } from '@api/region';
// import { getMember } from '@api/member';
import { useEffect } from 'react';
import { StartSearchButton } from '@components/search/StartSearchBtn';

const Main = () => {
  useEffect(() => {
    const fetchMember = async () => {
      try {
        const res = await getPopularTours();
        console.log(res.data);
      } catch (error) {
        console.error('회원 정보 조회 실패:', error);
      }
    };

    fetchMember();
  }, []);

  return (
    <>
      <StartSearchButton />
    </>
  );
};

export default Main;
