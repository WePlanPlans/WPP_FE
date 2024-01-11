import DeleteMemberButton from '@components/Mypage/DeleteMemberButton';
import { BackBox } from '@components/common';

const EditUserInfo = () => {
  return (
    <>
      <BackBox showBack showSave saveHandler={() => {}}>
        회원정보 수정
      </BackBox>
      <div className="flex flex-col">
        <button className="body4 text-gray4">비밀번호 변경</button>
        <DeleteMemberButton />
      </div>
    </>
  );
};

export default EditUserInfo;
