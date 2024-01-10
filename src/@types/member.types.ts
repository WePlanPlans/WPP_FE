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
  profileImageUrl: string;
  ageType:
    | 'TEENAGER'
    | 'TWENTIES'
    | 'THIRTIES'
    | 'FOURTIES'
    | 'ABOVE_FIFTIES'
    | 'DEFATULT';
  genderType: 'MALE' | 'FEMALE' | 'NON_BINARY';
  survey: Survey;
}

interface EditSurvey {
  survey: Survey;
}

interface Survey {
  accommodation: '분위기' | '가격';
  activeHours: '아침형' | '저녁형';
  food: '노포 맛집' | '인테리어';
  planning: '철저하게' | '여유롭게';
  tripStyle: '엑티비티' | '휴양';
}

interface SurveyArr {
  id: 'planning' | 'activeHours' | 'accommodation' | 'food' | 'tripStyle';
  title: '계획성' | '활동성' | '음식' | '숙소' | '관광지';
  options: string[];
}
