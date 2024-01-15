import EditPwForm from '@components/Mypage/EditPassword/EditPwForm';
import { BackBox } from '@components/common';
import { useNavigate } from 'react-router-dom';

const EditPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackBox
        showBack
        backHandler={() => {
          navigate('/mypage/info');
        }}>
        비밀번호 변경
      </BackBox>
      <EditPwForm />
    </>
  );
};

export default EditPassword;
