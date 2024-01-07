interface AuthRequest {
  email: string;
  password: string;
  name: string;
  nickname: string;
  genderType: string;
  ageType: string;
  profileImage: string;
  survey: string;
}

interface LoginFormValue {
  email: string;
  password: string;
}

interface SignupFormValue {
  email: string;
  password: string;
  passwordCheck: string;
}
