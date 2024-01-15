import { UserInfoState } from '@recoil/Auth.atom';
import { setItem } from '@utils/localStorageFun';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

const KakaoLogin = () => {
  const setUserInfo = useSetRecoilState(UserInfoState);
  const navigate = useNavigate();

  const [searchParams, _] = useSearchParams();
  const nickname = searchParams.get('nickname');
  const email = searchParams.get('email');
  const gender = searchParams.get('gender');
  const age_range = searchParams.get('age_range');
  const accessToken = searchParams.get('token');
  const profile_image = searchParams.get('profile_image');
  const signup = searchParams.get('signup');

  useEffect(() => {
    if (accessToken) {
      setItem('accessToken', accessToken);
      setUserInfo({
        nickname: nickname!,
        email: email!,
        profileImageUrl: profile_image,
        ageType: age_range,
        genderType: gender,
        survey: null,
      });
      if (signup === 'true') {
        // signup이 true면 이미 회원가입을 했던 유저
        navigate('/');
      } else if (signup === 'false') {
        // signup이 false면 이전에 회원가입을 하지 않았던 유저
        navigate('/signup/success');
      }
    } else {
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
      navigate('/login');
    }
  }, []);
  return <>카카오 로그인 중입니다.</>;
};

export default KakaoLogin;
