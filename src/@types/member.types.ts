interface MemberRequest {
  nickname: string;
  profileImageUrl: string;
  ageType: string;
  genderType: string;
}

interface SelectOption {
  id: string;
  value: string;
}

interface MemberInfo {
  nickname: string;
  email: string;
  profileImageUrl: string | null;
  ageType: string | null;
  // | 'TEENAGER'
  // | 'TWENTIES'
  // | 'THIRTIES'
  // | 'FOURTIES'
  // | 'ABOVE_FIFTIES'
  // | 'DEFATULT'
  genderType: string | null;
  // 'MALE' | 'FEMALE' | 'NON_BINARY' | 'DEFATULT';
  survey: Survey | null;
}

interface EditSurvey {
  survey: Survey;
}

interface Survey {
  accommodation: '분위기' | '가격' | null;
  activeHours: '아침형' | '저녁형' | null;
  food: '노포 맛집' | '인테리어' | null;
  planning: '철저하게' | '여유롭게' | null;
  tripStyle: '엑티비티' | '휴양' | null;
}

interface SurveyArr {
  id: 'planning' | 'activeHours' | 'accommodation' | 'food' | 'tripStyle';
  title: '계획성' | '활동성' | '음식' | '숙소' | '관광지';
  options: string[];
}
