interface AuthRequest {
  email: string;
  password: string;
}

interface SignupFormValue extends AuthRequest {
  passwordCheck: string;
}
