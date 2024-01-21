interface Props {
  inputCode: string;
  setInputCode: React.Dispatch<React.SetStateAction<string>>;
  showError: boolean;
}

const CodeInput = ({ inputCode, setInputCode, showError }: Props) => {
  const onCodeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeValue = e.target.value;
    if (changeValue.length <= 5) {
      setInputCode(e.target.value);
    }
  };
  return (
    <div className="relative flex w-full flex-col items-start px-2 ">
      <div
        className={`mb-10 mt-6 w-full border-b-[1.5px] border-solid ${
          showError ? 'border-red' : 'border-gray3 focus-within:border-main2'
        }`}>
        <input
          type="number"
          autoFocus
          maxLength={5}
          placeholder="편집 초대 코드를 입력해주세요."
          className="title3 mb-2 h-5 w-full bg-transparent text-gray4 outline-none placeholder:text-gray2"
          onChange={onCodeChange}
          value={inputCode}
        />
      </div>
      {showError && (
        <div className="body5 absolute top-[62px] text-red">
          편집 참여 코드를 다시 한번 확인해주세요.
        </div>
      )}
    </div>
  );
};

export default CodeInput;
