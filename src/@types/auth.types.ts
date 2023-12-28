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

interface LoginRequest {
  email: string;
  password: string;
}
