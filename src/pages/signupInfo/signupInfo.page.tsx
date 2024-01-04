import { Back, Button } from '@components/common';
import {
  CameraIcon,
  CircleIcon,
  ProgressBarIcon,
} from '@components/common/icons/Icons';
import {
  UserEmailInputBox,
  UserInputBox,
  UserPwInputBox,
} from '@components/user';
import { useState } from 'react';
import profileImg from '@assets/images/profileImg.svg';

const SignupInfo = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="relative">
      <Back />
      <div className="mt-2 flex justify-end">
        <ProgressBarIcon progress={2} />
      </div>
      <h1 className="title1 mb-9 mt-8">
        프로필 사진과 닉네임을
        <br />
        설정해주세요.
      </h1>
      <div className="mb-10 flex justify-center">
        <label htmlFor="profileImg" className="relative">
          <img src={profileImg} alt="유저 프로필" />
          <div className="absolute bottom-0 right-0">
            <CircleIcon />
          </div>
        </label>
        <input type="file" id="profileImg" className="m-[-1px] h-px w-px" />
      </div>
      <form>
        <UserInputBox
          type="text"
          label="닉네임"
          placeholder="닉네임을 입력하세요"
        />
        <div>성별</div>
        <div>여</div>
        <div>나이</div>
        <div>10대</div>

        <Button isActive={false}>다음</Button>
      </form>
    </div>
  );
};

export default SignupInfo;
