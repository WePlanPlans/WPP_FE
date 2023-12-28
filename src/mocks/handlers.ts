import { rest } from 'msw';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const handlers = [
  // 댓글 관련 API

  // 댓글 수정
  rest.put(`${SERVER_URL}/comments/:commentId`, (req, res, ctx) => {
    const { commentId } = req.params;
    const commentData = req.body;

    const responseData = {
      comments: [
        {
          contentId: commentId,
          authorNickname: '은별',
          authorProfileImageUrl: 'https://~~~.png',
          content: commentData,
          createdTime: '2023-12-28T07:51:46.980Z',
        },
      ],
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 댓글 삭제
  rest.delete(`${SERVER_URL}/comments/:commentId`, (req, res, ctx) => {
    const { commentId } = req.params;

    return res(
      ctx.status(200),
      ctx.json({ message: '댓글 삭제 성공', commentId }),
    );
  }),

  // 댓글 작성
  rest.post(`${SERVER_URL}/comments`, (req, res, ctx) => {
    const { commentId } = req.params;
    const commentData = req.body;

    const responseData = {
      comments: [
        {
          contentId: commentId,
          authorNickname: '은별',
          authorProfileImageUrl: 'https://~~~.png',
          content: commentData,
          createdTime: '2023-12-28T07:51:46.980Z',
        },
      ],
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 리뷰 관련 API

  // 리뷰 수정
  rest.put(`${SERVER_URL}/reviews/:reviewId`, (req, res, ctx) => {
    const { reviewId } = req.params;
    const reviewData = req.body as ReviewRequest;

    const responseData = {
      reviewId: reviewId,
      authorNickname: '은별',
      authorProfileImageUrl: 'https://~~~.png',
      rating: reviewData.rating,
      createdTime: new Date().toISOString(),
      content: reviewData.content,
      keywords: reviewData.keywords.map((keyword) => ({
        ...keyword,
        type: 'ACCOMMODATION_KEYWORD',
      })),
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 리뷰 삭제
  rest.delete(`${SERVER_URL}/reviews/:reviewId`, (req, res, ctx) => {
    const { reviewId } = req.params;
    return res(
      ctx.status(200),
      ctx.json({ message: `리뷰 ${reviewId} 삭제 성공` }),
    );
  }),

  // 리뷰 작성
  rest.post(`${SERVER_URL}/reviews`, (req, res, ctx) => {
    const { reviewId } = req.params;
    const reviewData = req.body as ReviewRequest;

    const responseData = {
      reviewId: reviewId,
      authorNickname: '은별',
      authorProfileImageUrl: 'https://~~~.png',
      rating: reviewData.rating,
      createdTime: new Date().toISOString(),
      content: reviewData.content,
      keywords: reviewData.keywords.map((keyword) => ({
        ...keyword,
        type: 'ACCOMMODATION_KEYWORD',
      })),
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 리뷰 댓글 조회
  rest.get(`${SERVER_URL}/reviews/:reviewId/comments`, (req, res, ctx) => {
    const responseData = {
      comments: [
        {
          contentId: 1,
          authorNickname: '은별',
          authorProfileImageUrl: 'https://~~~.png',
          content: '잘보고 갑니다~',
          createdTime: '2023-12-28T11:09:57.181Z',
        },
      ],
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 리뷰 키워드 조회
  rest.get(`${SERVER_URL}/reviews/keywords`, (req, res, ctx) => {
    const responseData = {
      keywords: [
        {
          keywordId: 1,
          content: '깨끗해요',
          type: 'ACCOMMODATION_KEYWORD',
        },
      ],
    };
    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 여정 관련 API

  // 나의 여정 목록 조회
  rest.get(`${SERVER_URL}/trips`, (req, res, ctx) => {
    const responseData = [
      {
        tripId: 1,
        tripName: '나의 ~번째 여정',
        startDate: '2023-12-28',
        endDate: '2023-12-28',
        numberOfTripMembers: 2,
        tripStatus: '여행 전',
        tripThumbnailUrl: 'https://~~~~.png',
      },
      // 추가 여정 데이터 필요 시 여기에 추가
    ];
    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 여정 생성
  rest.post(`${SERVER_URL}/trips`, (req, res, ctx) => {
    const responseData = req.body;

    return res(ctx.status(201), ctx.json(responseData));
  }),

  // 여정 탈퇴
  rest.delete(`${SERVER_URL}/trips/:tripId`, (req, res, ctx) => {
    const { tripId } = req.params;

    return res(
      ctx.status(200),
      ctx.json({ message: `여행 ${tripId} 탈퇴 성공` }),
    );
  }),

  // 여행지 관련 API

  // 인기 여행지 조회
  rest.get(`${SERVER_URL}/tours`, (req, res, ctx) => {
    const responseData = [
      {
        id: 1,
        title: '여행지 이름',
        rating: 4.5,
        reviewCount: 100,
        goodCount: 100,
        good: false,
        smallThumbnailUrl: 'http://~~~~~~image.jpg',
      },
    ];

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 여행지 상세 조회
  rest.get(`${SERVER_URL}/tours/:tourId`, (req, res, ctx) => {
    const { tourId } = req.params;
    const responseData = {
      id: tourId,
      title: '여행지 이름',
      rating: 4.5,
      good: false,
      fullAddress: 'OO시/도 OO구/군 OO로/길 OOO',
      zipcode: '00000',
      longitude: '127.04',
      latitude: '33.56',
      tel: '010-0000-0000',
      originalThumbnailUrl: 'http://~~~~~~image.jpg',
      keywordCount: 100,
      reviewInfos: [
        {
          reviewId: 1,
          authorNickname: '은별',
          authorProfileImageUrl: 'https://~~~.png',
          rating: 4,
          createdTime: '2023-12-28T11:31:54.947Z',
          content: '~~~여서 ~~~ 해서 ~~로 좋았습니다.',
          keywords: [
            {
              keywordId: 1,
              content: '깨끗해요',
              type: 'ACCOMMODATION_KEYWORD',
            },
          ],
        },
      ],
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 여행 상품 리뷰 조회
  rest.get(`${SERVER_URL}/tours/:tourId/reviews`, (req, res, ctx) => {
    const responseData = {
      reviewInfos: [
        {
          reviewId: 1,
          authorNickname: '은별',
          authorProfileImageUrl: 'https://~~~.png',
          rating: 4,
          createdTime: '2023-12-28T11:34:08.087Z',
          content: '~~~여서 ~~~ 해서 ~~로 좋았습니다.',
          keywords: [
            {
              keywordId: 1,
              content: '깨끗해요',
              type: 'ACCOMMODATION_KEYWORD',
            },
          ],
        },
        // 필요에 따라 추가 리뷰 정보를 여기에 포함
      ],
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 여행지 검색
  rest.get(`${SERVER_URL}/tours/search`, (req, res, ctx) => {
    const responseData = {
      reviewInfos: [
        {
          reviewId: 1,
          authorNickname: '은별',
          authorProfileImageUrl: 'https://~~~.png',
          rating: 4,
          createdTime: '2023-12-28T11:34:08.087Z',
          content: '~~~여서 ~~~ 해서 ~~로 좋았습니다.',
          keywords: [
            {
              keywordId: 1,
              content: '깨끗해요',
              type: 'ACCOMMODATION_KEYWORD',
            },
          ],
        },
        // 필요에 따라 추가 리뷰 정보를 여기에 포함
      ],
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 유저 관련 API

  // 회원 정보 조회
  rest.get(`${SERVER_URL}/member`, (req, res, ctx) => {
    const responseData = {
      memberId: 1,
      nickname: '닉네임',
      email: 'example@mail.com',
      profileImageUrl: '프로필 이미지',
      ageType: '연령대',
      genderType: '성별',
      survey: '설문조사 결과',
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 회원 정보 수정
  rest.put(`${SERVER_URL}/member`, (req, res, ctx) => {
    const memberData = req.body as MemberRequest;

    const responseData = {
      memberId: 1,
      nickname: memberData.nickname,
      email: 'example@mail.com',
      profileImageUrl: memberData.profileImageUrl,
      ageType: '연령대',
      genderType: '성별',
      survey: memberData.survey,
    };

    return res(
      ctx.status(200),
      ctx.json({
        message: `회원 정보 수정 성공, 비밀번호:${memberData.password}`,
        responseData,
      }),
    );
  }),

  // 회원 탈퇴
  rest.delete(`${SERVER_URL}/member`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: '회원 탈퇴 성공' }));
  }),

  // 나의 여정 조회
  rest.get(`${SERVER_URL}/member/trips`, (req, res, ctx) => {
    const responseData = {
      trips: [
        {
          tripId: 1,
          tripName: '나의 ~번째 여정',
          startDate: '2023-12-28',
          endDate: '2023-12-28',
          numberOfTripMembers: 2,
          tripStatus: '여행 전',
          tripThumbnailUrl: 'https://~~~~.png',
        },
      ],
      // 필요시 나의 여정 추가
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 나의 관심 여행지 조회
  rest.get(`${SERVER_URL}/member/tours`, (req, res, ctx) => {
    const responseData = {
      tours: [
        {
          id: 1,
          title: '여행지 이름',
          rating: 4.5,
          reviewCount: 100,
          goodCount: 100,
          good: false,
          smallThumbnailUrl: 'http://~~~~~~image.jpg',
        },
      ],
      // 필요시 관심 여행지 추가
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 나의 리뷰 조회
  rest.get(`${SERVER_URL}/member/reviews`, (req, res, ctx) => {
    const responseData = {
      reviewInfos: [
        {
          reviewId: 1,
          authorNickname: '은별',
          authorProfileImageUrl: 'https://~~~.png',
          rating: 4,
          createdTime: '2023-12-28T11:51:53.628Z',
          content: '~~~여서 ~~~ 해서 ~~로 좋았습니다.',
          keywords: [
            {
              keywordId: 1,
              content: '깨끗해요',
              type: 'ACCOMMODATION_KEYWORD',
            },
          ],
        },
      ],
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 나의 관심 여행지 삭제
  rest.delete(`${SERVER_URL}/member/tours/:tourId`, (req, res, ctx) => {
    const { tourId } = req.params;
    return res(
      ctx.status(200),
      ctx.json({ message: `관심 여행지 ${tourId} 삭제 성공` }),
    );
  }),

  // 인증 관련 API

  // 회원가입
  rest.post(`${SERVER_URL}/auth/signup`, (req, res, ctx) => {
    const authData = req.body as AuthRequest;

    return res(
      ctx.status(200),
      ctx.json({ message: '회원가입 성공', authData }),
    );
  }),

  // 로그아웃
  rest.post(`${SERVER_URL}/auth/logout`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: '로그아웃 성공' }));
  }),

  // 이메일 로그인
  rest.post(`${SERVER_URL}/auth/login`, (req, res, ctx) => {
    const loginData = req.body;

    const responseData = {
      token: 'jwtToken',
    };

    return res(
      ctx.status(200),
      ctx.json({ message: '로그인 성공', loginData, responseData }),
    );
  }),

  // 카카오 로그인
  rest.post(`${SERVER_URL}/auth/login/kakao`, (req, res, ctx) => {
    const loginData = req.body;

    const responseData = {
      token: 'jwtToken',
    };

    return res(
      ctx.status(200),
      ctx.json({ message: '카카오 로그인 성공', loginData, responseData }),
    );
  }),

  // 지역 관련 API

  // 전체 지역 조회
  rest.get(`${SERVER_URL}/region`, (req, res, ctx) => {
    const areaCode = req.url.searchParams.get('areaCode');

    const responseData = {
      regions: [
        {
          areaCode: areaCode,
          subAreaCode: 0,
          name: '서울시',
        },
      ],
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 인기 지역 조회
  rest.get(`${SERVER_URL}/region/popular`, (req, res, ctx) => {
    const responseData = {
      status: 200,
      message: 'SUCCESS',
      data: {
        regions: [
          {
            areaCode: 1,
            subAreaCode: null,
            name: '서울',
          },
          {
            areaCode: 6,
            subAreaCode: null,
            name: '부산',
          },
          {
            areaCode: 39,
            subAreaCode: null,
            name: '제주도',
          },
          {
            areaCode: 35,
            subAreaCode: 2,
            name: '경주',
          },
          {
            areaCode: 32,
            subAreaCode: 1,
            name: '강릉',
          },
        ],
      },
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 카테고리 관련 API

  // 카테고리 조회
  rest.get(`${SERVER_URL}/category`, (req, res, ctx) => {
    // 모의 카테고리 데이터
    const responseData = {
      status: 200,
      message: 'SUCCESS',
      data: [
        {
          code: 39,
          name: '식당',
        },
        {
          code: 32,
          name: '숙소',
        },
        {
          code: 12,
          name: '관광지',
        },
      ],
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),
];
