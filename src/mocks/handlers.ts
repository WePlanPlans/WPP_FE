import { rest } from 'msw';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const handlers = [
  // 댓글 관련 API

  // 댓글 수정
  rest.put(`${SERVER_URL}/comments/:commentId`, (req, res, ctx) => {
    const { commentId } = req.params;
    const commentData = req.body;

    const responseData = {
      status: 0,
      message: 'string',
      data: {
        commentId: commentId,
        authorNickname: '은별',
        authorProfileImageUrl: 'https://~~~.png',
        content: commentData,
        createdTime: '2023-12-28T15:12:40.231Z',
      },
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 댓글 삭제
  rest.delete(`${SERVER_URL}/comments/:commentId`, (req, res, ctx) => {
    const { commentId } = req.params;

    const responseData = {
      status: 0,
      message: `댓글 삭제 성공, commentId: ${commentId}`,
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 댓글 작성
  rest.post(`${SERVER_URL}/comments`, (req, res, ctx) => {
    const { commentId } = req.params;
    const commentData = req.body;

    const responseData = {
      status: 0,
      message: 'string',
      data: {
        commentId: commentId,
        authorNickname: '은별',
        authorProfileImageUrl: 'https://~~~.png',
        content: commentData,
        createdTime: '2023-12-28T15:15:48.041Z',
      },
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 리뷰 관련 API

  // 리뷰 수정
  rest.put(`${SERVER_URL}/reviews/:reviewId`, (req, res, ctx) => {
    const { reviewId } = req.params;
    const reviewData = req.body as ReviewRequest;

    const responseData = reviewData;

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
      status: 0,
      message: 'string',
      data: {
        reviewId: reviewId,
        authorNickname: '은별',
        authorProfileImageUrl: 'https://~~~.png',
        rating: 4,
        createdTime: '2023-12-28T16:24:09.639Z',
        content: '~~~여서 ~~~ 해서 ~~로 좋았습니다.',
        keywords: [
          {
            keywordId: 1,
            content: '깨끗해요',
            type: 'ACCOMMODATION_KEYWORD',
          },
        ],
      },
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 리뷰 댓글 조회
  rest.get(`${SERVER_URL}/reviews/:reviewId/comments`, (req, res, ctx) => {
    const responseData = {
      status: 0,
      message: 'string',
      data: {
        comments: [
          {
            commentId: 1,
            authorNickname: '은별',
            authorProfileImageUrl: 'https://~~~.png',
            content: '잘보고 갑니다~',
            createdTime: '2023-12-28T16:29:34.105Z',
          },
        ],
      },
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 리뷰 키워드 조회
  rest.get(`${SERVER_URL}/reviews/keywords`, (req, res, ctx) => {
    const responseData = {
      status: 0,
      message: 'string',
      data: {
        keywords: [
          {
            keywordId: 1,
            content: '깨끗해요',
            type: 'ACCOMMODATION_KEYWORD',
          },
        ],
      },
    };
    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 여정 관련 API

  // 나의 여정 목록 조회
  rest.get(`${SERVER_URL}/trips`, (req, res, ctx) => {
    const responseData = {
      status: 0,
      message: 'string',
      data: {
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
      },
    };
    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 여정 생성
  rest.post(`${SERVER_URL}/trips`, (req, res, ctx) => {
    const responseData = {
      status: 0,
      message: 'string',
      data: {
        tripId: 1,
        tripName: '나의 ~번째 여정',
        startDate: '2023-12-28',
        endDate: '2023-12-28',
        numberOfTripMembers: 2,
        tripStatus: '여행 전',
        tripThumbnailUrl: 'https://~~~~.png',
      },
    };

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
    const { page, size } = req.params;
    const responseData = {
      status: 0,
      message: 'string',
      data: {
        totalPages: 0,
        totalElements: 0,
        pageable: {
          pageNumber: page,
          pageSize: size,
          offset: 0,
          sort: {
            sorted: true,
            empty: true,
            unsorted: true,
          },
          paged: true,
          unpaged: true,
        },
        size: size, // 확인필요
        content: [
          {
            id: 1,
            title: '여행지 이름',
            ratingAverage: 4.5,
            reviewCount: 100,
            likedCount: 100,
            liked: false,
            smallThumbnailUrl: 'http://~~~~~~image.jpg',
          },
        ],
        number: page, // 확인필요
        sort: {
          sorted: true,
          empty: true,
          unsorted: true,
        },
        numberOfElements: 0,
        first: true,
        last: true,
        empty: true,
      },
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 여행지 상세 조회
  rest.get(`${SERVER_URL}/tours/:tourItemId`, (req, res, ctx) => {
    const { tourId } = req.params;
    const responseData = {
      status: 0,
      message: 'string',
      data: {
        id: tourId,
        title: '여행지 이름',
        liked: false,
        fullAddress: 'OO시/도 OO구/군 OO로/길 OOO',
        zipcode: '00000',
        longitude: '127.04',
        latitude: '33.56',
        tel: '010-0000-0000',
        originalThumbnailUrl: 'http://~~~~~~image.jpg',
      },
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 여행 상품 리뷰 조회
  rest.get(`${SERVER_URL}/tours/:tourItemId/reviews`, (req, res, ctx) => {
    const responseData = {
      status: 0,
      message: 'string',
      data: {
        ratingAverage: 4.5,
        reviewTotalCount: 10,
        keywordTotalCount: 10,
        reviewInfos: [
          {
            reviewId: 1,
            authorNickname: '은별',
            authorProfileImageUrl: 'https://~~~.png',
            rating: 4,
            createdTime: '2023-12-28T16:01:42.494Z',
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
        tourKeywordInfos: [
          {
            keywordId: 1,
            content: '깨끗해요',
            type: 'ACCOMMODATION_KEYWORD',
            keywordCount: 2,
          },
        ],
      },
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 여행지 검색
  rest.get(`${SERVER_URL}/tours/search`, (req, res, ctx) => {
    const { page, size } = req.params;
    const responseData = {
      status: 0,
      message: 'string',
      data: {
        totalPages: 0,
        totalElements: 0,
        pageable: {
          pageNumber: page,
          pageSize: size,
          offset: 0,
          sort: {
            sorted: true,
            empty: true,
            unsorted: true,
          },
          paged: true,
          unpaged: true,
        },
        size: size, // 확인필요
        content: [
          {
            id: 1,
            title: '여행지 이름',
            ratingAverage: 4.5,
            reviewCount: 100,
            likedCount: 100,
            liked: false,
            smallThumbnailUrl: 'http://~~~~~~image.jpg',
          },
        ],
        number: page, // 확인필요
        sort: {
          sorted: true,
          empty: true,
          unsorted: true,
        },
        numberOfElements: 0,
        first: true,
        last: true,
        empty: true,
      },
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 유저 관련 API

  // 회원 정보 조회
  rest.get(`${SERVER_URL}/member`, (req, res, ctx) => {
    const responseData = {
      status: 0,
      message: 'string',
      data: {
        memberId: 1,
        nickname: '닉네임',
        email: 'example@mail.com',
        profileImageUrl: '프로필 이미지',
        ageType: '연령대',
        genderType: '성별',
        survey: '설문조사 결과',
      },
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 회원 정보 수정
  rest.put(`${SERVER_URL}/member`, (req, res, ctx) => {
    const memberData = req.body as MemberRequest;

    const responseData = {
      status: 0,
      message: 'string',
      data: {
        memberId: 1,
        nickname: memberData.nickname,
        email: 'example@mail.com',
        profileImageUrl: memberData.profileImageUrl,
        ageType: '연령대',
        genderType: '성별',
        survey: memberData.survey,
      },
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
      status: 0,
      message: 'string',
      data: {
        totalPages: 0,
        totalElements: 0,
        pageable: {
          pageNumber: 0,
          pageSize: 0,
          offset: 0,
          sort: {
            sorted: true,
            empty: true,
            unsorted: true,
          },
          paged: true,
          unpaged: true,
        },
        size: 0,
        content: [
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
        number: 0,
        sort: {
          sorted: true,
          empty: true,
          unsorted: true,
        },
        numberOfElements: 0,
        first: true,
        last: true,
        empty: true,
      },
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 나의 관심 여행지 조회
  rest.get(`${SERVER_URL}/member/tours`, (req, res, ctx) => {
    const responseData = {
      status: 0,
      message: 'string',
      data: {
        totalPages: 0,
        totalElements: 0,
        pageable: {
          pageNumber: 0,
          pageSize: 0,
          offset: 0,
          sort: {
            sorted: true,
            empty: true,
            unsorted: true,
          },
          paged: true,
          unpaged: true,
        },
        size: 0,
        content: [
          {
            id: 1,
            title: '여행지 이름',
            ratingAverage: 4.5,
            reviewCount: 100,
            likedCount: 100,
            liked: false,
            smallThumbnailUrl: 'http://~~~~~~image.jpg',
          },
        ],
        number: 0,
        sort: {
          sorted: true,
          empty: true,
          unsorted: true,
        },
        numberOfElements: 0,
        first: true,
        last: true,
        empty: true,
      },
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 나의 리뷰 조회
  rest.get(`${SERVER_URL}/member/reviews`, (req, res, ctx) => {
    const responseData = {
      status: 0,
      message: 'string',
      data: {
        totalPages: 0,
        totalElements: 0,
        pageable: {
          pageNumber: 0,
          pageSize: 0,
          offset: 0,
          sort: {
            sorted: true,
            empty: true,
            unsorted: true,
          },
          paged: true,
          unpaged: true,
        },
        size: 0,
        content: [
          {
            reviewId: 1,
            authorNickname: '은별',
            authorProfileImageUrl: 'https://~~~.png',
            rating: 4,
            createdTime: '2023-12-28T16:15:43.756Z',
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
        number: 0,
        sort: {
          sorted: true,
          empty: true,
          unsorted: true,
        },
        numberOfElements: 0,
        first: true,
        last: true,
        empty: true,
      },
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
      status: 0,
      message: 'string',
      data: {
        token: 'jwtToken',
      },
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
      status: 0,
      message: 'string',
      data: {
        token: 'jwtToken',
      },
    };
    return res(
      ctx.status(200),
      ctx.json({ message: '카카오 로그인 성공', loginData, responseData }),
    );
  }),

  // 닉네임 중복조회
  rest.get(`${SERVER_URL}/auth/nicknames/check/:nickname`, (req, res, ctx) => {
    const responseData = {
      status: 0,
      message: 'string',
      data: {
        exists: true,
      },
    };

    return res(
      ctx.status(200),
      ctx.json({ message: '닉네임 중복조회 완료', responseData }),
    );
  }),

  // 이메일 중복조회
  rest.get(`${SERVER_URL}/auth/emails/check/:email`, (req, res, ctx) => {
    const responseData = {
      status: 0,
      message: 'string',
      data: {
        exists: true,
      },
    };

    return res(
      ctx.status(200),
      ctx.json({ message: '이메일 중복조회 완료', responseData }),
    );
  }),

  // 지역 관련 API

  // 전체 지역 조회
  rest.get(`${SERVER_URL}/region`, (req, res, ctx) => {
    const areaCode = req.url.searchParams.get('areaCode');

    const responseData = {
      status: 0,
      message: 'string',
      data: {
        regions: [
          {
            areaCode: areaCode, // 확인필요
            subAreaCode: 0,
            name: '서울시',
          },
        ],
      },
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  // 인기 지역 조회
  rest.get(`${SERVER_URL}/region/popular`, (req, res, ctx) => {
    const responseData = {
      status: 0,
      message: 'string',
      data: {
        regions: [
          {
            areaCode: 1,
            subAreaCode: 0,
            name: '서울시',
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
      status: 0,
      message: 'string',
      data: [
        {
          code: 39,
          name: '식당',
        },
      ],
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),
];
