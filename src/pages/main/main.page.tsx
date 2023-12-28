import { A, B } from '@components/abc';
import { ButtonPrimary, ButtonWhite } from '@components/common/button/Button';
import { C } from '@components/def';

import { getPopularTours } from '@api/region';
import { getMember } from '@api/member';
import { useEffect } from 'react';

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
    <div className="p-5">
      <ButtonWhite onClick={() => {}}>더보기</ButtonWhite>
      <ButtonPrimary onClick={() => {}}>완료</ButtonPrimary>
    </div>
  );
};

export default Main;
