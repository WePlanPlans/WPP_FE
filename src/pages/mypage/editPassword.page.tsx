import EditPwForm from '@components/Mypage/EditPassword/EditPwForm';
import { BackBox } from '@components/common';

const EditPassword = () => {
  return (
    <div className="">
      <BackBox showBack>비밀번호 변경</BackBox>
      <EditPwForm />
    </div>
  );
};

export default EditPassword;
