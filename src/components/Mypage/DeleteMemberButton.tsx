import { deleteMember } from '@api/member';
import { UserInfoState } from '@recoil/Auth.atom';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

const DeleteMemberButton = () => {
  const setUserInfo = useSetRecoilState(UserInfoState);
  const navigate = useNavigate();
  const onDeleteClick = async () => {
    if (confirm('정말 탈퇴 하시겠습니까?')) {
      try {
        const res = await deleteMember();
        if (res.data.status === 200) {
          setUserInfo(null);
          navigate('/');
          alert('회원 탈퇴되었습니다. 감사합니다.');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <button onClick={onDeleteClick} className="body5 text-gray4">
      회원 탈퇴
    </button>
  );
};

export default DeleteMemberButton;
