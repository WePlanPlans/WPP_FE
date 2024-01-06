import { useState } from 'react';
import { CloseIcon } from '@components/common/icons/Icons';
import ValidifyCheck from './ValidifyCheck';

const AuthPwInputBox = () => {
  const [inputPwValue, setInputPwValue] = useState('');

  const onPwInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPwValue(e.target.value);
  };

  const [inputPwCheckValue, setInputPwCheckValue] = useState('');

  const onPwCheckInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPwCheckValue(e.target.value);
  };

  return (
    <>
      <div className="mb-6 flex flex-col gap-2">
        <div className="flex flex-col gap-[0.4375rem]">
          <label htmlFor="비밀번호" className="body3 text-main2">
            비밀번호
          </label>
          <div className="flex h-10 items-center border-b-[1.25px] border-solid border-gray3 focus-within:border-main1">
            <input
              id="비밀번호"
              className="w-full text-sm font-normal outline-none placeholder:text-gray3"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              required
              value={inputPwValue}
              onChange={onPwInputChange}
            />
            {inputPwValue && (
              <button
                type="button"
                onClick={() => {
                  setInputPwValue('');
                }}>
                <CloseIcon size={20} color="white" fill="#888888" />
              </button>
            )}
          </div>
        </div>
        <div className="flex h-6 items-center gap-2">
          {['checkPwEng', 'checkPwNum', 'checkPwLength'].map(
            (validifyCheckItem) => (
              <ValidifyCheck
                key={validifyCheckItem}
                checkId={validifyCheckItem}
                inputValue={inputPwValue}
              />
            ),
          )}
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-2">
        <div className="flex flex-col gap-[0.4375rem]">
          <label htmlFor="비밀번호 확인" className="body3 text-main2">
            비밀번호 확인
          </label>
          <div className="flex h-10 items-center border-b-[1.25px] border-solid border-gray3 focus-within:border-main1">
            <input
              id="비밀번호 확인"
              className="w-full text-sm font-normal outline-none placeholder:text-gray3"
              type="password"
              placeholder="비밀번호를 재입력해주세요"
              required
              value={inputPwCheckValue}
              onChange={onPwCheckInputChange}
            />
            {inputPwCheckValue && (
              <button
                type="button"
                onClick={() => {
                  setInputPwCheckValue('');
                }}>
                <CloseIcon size={20} color="white" fill="#888888" />
              </button>
            )}
          </div>
        </div>
        <div className="flex h-6 items-center gap-2">
          {['checkPwMatch'].map((validifyCheckItem) => (
            <ValidifyCheck
              key={validifyCheckItem}
              checkId={validifyCheckItem}
              inputValue={inputPwCheckValue}
              inputValueCheck={inputPwValue}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AuthPwInputBox;
