import { KakaoIcon } from '@components/common/icons/Icons';

const KakaoLoginButton = () => {
  return (
    <a
      href={`${import.meta.env.VITE_SERVER_URL}oauth2/authorization/kakao`}
      // href="http://localhost:8080/oauth2/authorization/kakao"
      className="body3 mb-2 flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-[#fee304] p-2 text-['#3B1E1E']">
      <KakaoIcon />
      카카오로 로그인
    </a>
  );
};

export default KakaoLoginButton;
