import { UserEmailInputBox, UserPwInputBox } from '@components/user';
import { useState } from 'react';

const Signup = () => {
  const [isActive] = useState<boolean>(false);

  return (
    <div className="flex h-[95vh] flex-col ">
      <h1 className="title1 my-11">
        위플플 이용을 위해
        <br />
        회원가입을 해주세요
      </h1>
      <form className="flex h-full flex-col">
        <UserEmailInputBox />
        <UserPwInputBox />

        {/* TODO 서지수 | 모든 조건이 만족되어야지만 활성화되도록 수정 */}
        <div className="mt-auto">
          <button
            className={`bottom-5 h-14 w-full rounded-lg ${
              isActive ? 'bg-main1' : 'bg-gray3'
            } headline1 relative text-white`}>
            다음
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
