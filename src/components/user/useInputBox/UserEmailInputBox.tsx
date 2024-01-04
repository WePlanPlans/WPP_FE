import { CloseIcon } from '@components/common/icons/Icons';
import { useState } from 'react';

const UserEmailInputBox = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const [isEmailValidated, setIsEmailValidated] = useState(true);
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    if (e.target.value !== '') {
      setIsEmailValidated(
        /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/.test(inputValue),
      );
    } else {
      setIsEmailDuplicate(false);
    }
  };

  const onInputBlur = () => {
    if (isEmailValidated) {
      console.log('이메일 중복 확인 요청');
      // setIsEmailDuplicate(true);
    }
  };

  return (
    <div className="mb-14 flex flex-col gap-2">
      <div className="flex flex-col gap-[0.4375rem]">
        <label htmlFor="이메일" className="body3 text-main2">
          이메일
        </label>
        <div className="flex h-10 items-center border-b-[1.25px] border-solid border-gray3 focus-within:border-main1">
          <input
            id="이메일"
            className="w-full text-sm font-normal outline-none placeholder:text-gray3"
            type="email"
            placeholder="이메일 입력"
            required
            value={inputValue}
            onChange={onInputChange}
            onBlur={onInputBlur}
          />
          {inputValue && (
            <button
              type="button"
              onClick={() => {
                setInputValue('');
              }}>
              <CloseIcon size={20} color="white" fill="#888888" />
            </button>
          )}
        </div>
      </div>
      <span className="body6 text-red">
        {!isEmailValidated
          ? '이메일 형식이 올바르지 않습니다.'
          : isEmailDuplicate && '사용 중인 이메일입니다.'}
      </span>
    </div>
  );
};

export default UserEmailInputBox;
