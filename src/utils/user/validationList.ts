const validationList = [
  //   {
  //     id: 'checkEmailValidity',
  //     value: '이메일 유효성 검사',
  //     func: (value: string) =>
  //       /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/.test(value),
  //   },
  //   {
  //     id: 'checkEmailDuplicate',
  //     value: '이메일 중복 확인',
  //     func: () => {
  //       validationList[0].func;
  //       return false;
  //     },
  //   },
  {
    id: 'checkPwEng',
    value: '영문포함',
    func: (value: string) => /[a-zA-Z]/.test(value),
  },
  {
    id: 'checkPwNum',
    value: '숫자포함',
    func: (value: string) => /[0-9]/.test(value),
  },
  {
    id: 'checkPwLength',
    value: '8~20자 이내',
    func: (value: string) => value.length >= 8 && value.length <= 20,
  },
  {
    id: 'checkPwMatch',
    value: '비밀번호 일치',
    func: (value: string, checkValue: string) => value === checkValue,
  },
];

export default validationList;
