import DeleteMemberButton from '@components/Mypage/DeleteMemberButton';
import { BackBox } from '@components/common';
import { Link } from 'react-router-dom';

const EditUserInfo = () => {
  return (
    <>
      <BackBox showBack showSave saveHandler={() => {}}>
        회원정보 수정
      </BackBox>
      <div className="flex flex-col items-center">
        <Link to="password" className="body4 text-gray4">
          비밀번호 변경
        </Link>
        <DeleteMemberButton />
      </div>
    </>
  );
};

export default EditUserInfo;
