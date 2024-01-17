import DeleteMemberButton from '@components/Mypage/DeleteMemberButton';
import UserInfoForm from '@components/Mypage/UserInfoForm';
import { BackBox } from '@components/common';
import { useNavigate } from 'react-router-dom';

const EditUserInfo = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackBox
        showBack
        backHandler={() => {
          navigate('/mypage');
        }}
        // showSave
        // saveHandler={() => {}}
      >
        회원정보 수정
      </BackBox>
      <div className="flex flex-col items-center">
        <UserInfoForm />
        <DeleteMemberButton />
      </div>
    </>
  );
};

export default EditUserInfo;
