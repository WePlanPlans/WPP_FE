import { deleteMember } from '@api/member';
import Alert from '@components/common/alert/Alert';
import { UserInfoState } from '@recoil/Auth.atom';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

const DeleteMemberButton = () => {
  const setUserInfo = useSetRecoilState(UserInfoState);
  const navigate = useNavigate();

  const handleConfirm = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    try {
      const res = await deleteMember();
      if (res.data.status === 200) {
        setUserInfo(null);
        navigate('/');
        alert('회원 탈퇴되었습니다. 감사합니다.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };
  return (
    <Alert
      title="회원 탈퇴"
      message="정말 탈퇴하시겠어요?"
      onConfirm={handleConfirm}
      onCancel={handleCancel}>
      <button className="body5 text-gray4">회원 탈퇴</button>
    </Alert>
  );
};

export default DeleteMemberButton;
