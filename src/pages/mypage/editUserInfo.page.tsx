import DeleteMemberButton from '@components/Mypage/DeleteMemberButton';
import { BackBox } from '@components/common';
import { Link, useNavigate } from 'react-router-dom';

const EditUserInfo = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackBox
        showBack
        backHandler={() => {
          navigate('/mypage');
        }}
        showSave
        saveHandler={() => {}}>
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
