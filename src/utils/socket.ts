import { useEffect } from 'react';
import { socketClient } from '@api/socket';

const message = {
  startDate: '2024-01-03',
  endDate: '2024-01-05',
  numberOfPeople: 2,
  tripName: 'success',
  tripStatus: 'BEFORE',
  area: '서울',
  subarea: '장호진',
  budget: 10000,
};

// 이미들어가있는 아이템 중복으로 못하게해야됨
const itemMessage = {
  visitDate: '2024-01-03',
  newTripItems: [
    {
      tourItemId: 5,
    },
  ],
};

const data = {
  visitDate: '2024-01-07',
};

const price = {
  price: 15000,
};

const Order = {
  visitDate: '2024-01-05',
  tripItemOrder: [
    {
      tripItemId: 1,
      seqNum: 1,
    },
    {
      tripItemId: 2,
      seqNum: 2,
    },
  ],
};

const member = {
  memberId: 1,
};

const trans = {
  transportation: 'CAR',
};

const tripId = 1;
const visitDate = '2024-01-03';
const tripItemId = 1;

const connect = () => {
  socketClient.onConnect = () => {
    socketClient.subscribe(`/sub/${tripId}/info`, (message) => {
      console.log(`기본정보 변경 이벤트:`, message.body);
    });

    socketClient.subscribe(
      `/sub/${tripId}/tripItems/${visitDate}`,
      (message) => {
        console.log(`방문날짜별 여정 여행 아이템 정보:`, message.body);
      },
    );

    socketClient.subscribe(`/sub/${tripId}/path/${visitDate}`, (message) => {
      console.log(`방문날짜별 여정경로 정보:`, message.body);
    });

    socketClient.subscribe(`/sub/${tripId}/connectedMember`, (message) => {
      console.log(`연결된 멤버 정보  :`, message.body);
    });

    socketClient.subscribe(`/sub/${tripId}/budget`, (message) => {
      console.log(`목표 경비, 실제 발생 비용:`, message.body);
    });

    socketClient.publish({
      // 여정 기본 정보 변경 이벤트 발생시 ✅
      destination: `/pub/trips/${tripId}/info`,
      body: JSON.stringify(message),
    });

    socketClient.publish({
      // 여정에 여행 아이템 추가 이벤트 발생시 ✅
      destination: `/pub/trips/${tripId}/addTripItems`,
      body: JSON.stringify(itemMessage),
    });

    socketClient.publish({
      // 여행 아이템 예상 가격 업데이트 이벤트 발생시 ✅
      destination: `/pub/tripItems/${tripItemId}/updatePrice`,
      body: JSON.stringify(price),
    });

    socketClient.publish({
      // 여행 아이템 방문 순서 변경 이벤트 발생시 ✅
      destination: `/pub/trips/${tripId}/updateTripItemOrder`,
      body: JSON.stringify(Order),
    });

    socketClient.publish({
      // 여행 아이템 방문 교통 수단 변경 이벤트 발생시 ✅
      destination: `/pub/tripItems/${tripItemId}/updateTransportation`,
      body: JSON.stringify(trans),
    });

    socketClient.publish({
      // 여행 아이템 방문 날짜 변경 이벤트 발생시 ✅
      destination: `/pub/tripItems/${tripItemId}/updateVisitDate`,
      body: JSON.stringify(data),
    });

    socketClient.publish({
      // 여행 아이템 삭제 이벤트 발생시 ✅
      destination: `/pub/tripItems/${tripItemId}/deleteItem`,
    });

    socketClient.publish({
      // 멤버 여정 페이지로 입장 이벤트 발생시 ✅
      destination: `/pub/trips/${tripId}/connectMember`,
      body: JSON.stringify(member),
    });

    socketClient.publish({
      // 멤버 여정 페이지 퇴장 이벤트 발생시 ✅
      destination: `/pub/trips/${tripId}/disconnectMember`,
      body: JSON.stringify(member),
    });

    socketClient.publish({
      // 여정 편집 페이지 입장 이벤트 발생시 ✅
      destination: `/pub/trips/${tripId}/enterMember`,
      body: JSON.stringify(member),
    });

    socketClient.publish({
      // 날짜별 여행 아이템 & 경로 조회 ✅
      destination: `/pub/trips/${tripId}/getPathAndItems`,
      body: JSON.stringify(data),
    });
  };

  socketClient.activate();
};

useEffect(() => {
  connect();

  return () => {
    socketClient.deactivate();
  };
}, []);
