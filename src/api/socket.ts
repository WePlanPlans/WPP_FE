import * as StompJs from '@stomp/stompjs';

export const socketClient = new StompJs.Client({
  brokerURL: import.meta.env.VITE_SOCKET_URL,
});

// 소켓 구독
// 여정 기본 정보
export const subInfo = (tripId: number) => {
  socketClient.subscribe(`/sub/${tripId}/info`, (message) => {
    console.log(`기본정보 변경 이벤트:`, message.body);
  });
};

// 방문 날짜별 여정 여행 아이템 정보
export const subItem = (tripId: number, visitDate: string) => {
  socketClient.subscribe(`/sub/${tripId}/tripItems/${visitDate}`, (message) => {
    console.log(`방문날짜별 여정 여행 아이템 정보:`, message.body);
  });
};

// 방문 날짜별 여정 경로 정보
export const subPath = (tripId: number, visitDate: string) => {
  socketClient.subscribe(`/sub/${tripId}/path/${visitDate}`, (message) => {
    console.log(`방문날짜별 여정경로 정보:`, message.body);
  });
};

// 연결된 멤버 정보
export const subMember = (tripId: number) => {
  socketClient.subscribe(`/sub/${tripId}/connectedMember`, (message) => {
    console.log(`연결된 멤버 정보  :`, message.body);
  });
};

// 목표 경비, 실제 발생 비용
export const subBudget = (tripId: number) => {
  socketClient.subscribe(`/sub/${tripId}/budget`, (message) => {
    console.log(`목표 경비, 실제 발생 비용:`, message.body);
  });
};

// 소켓 전송
// 여정 기본 정보 변경 이벤트 발생시
export const pubInfo = (pubInfo: pubInfo, tripId: number) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/info`,
    body: JSON.stringify(pubInfo),
  });
};

// 여정에 여행 아이템 추가 이벤트 발생시
export const pubAddTripItem = (
  pubAddTripItem: pubAddTripItem,
  tripId: number,
) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/addTripItems`,
    body: JSON.stringify(pubAddTripItem),
  });
};

// 여행 아이템 예상 가격 업데이트 이벤트 발생시
export const pubUpdatePrice = (
  pubUpdatePrice: pubUpdatePrice,
  tripItemId: number,
) => {
  socketClient.publish({
    destination: `/pub/tripItems/${tripItemId}/updatePrice`,
    body: JSON.stringify(pubUpdatePrice),
  });
};

// 여행 아이템 방문 순서 변경 이벤트 발생시
export const pubUpdateTripItem = (
  pubUpdateTripItem: pubUpdateTripItem,
  tripId: number,
) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/updateTripItemOrder`,
    body: JSON.stringify(pubUpdateTripItem),
  });
};

// 여행 아이템 방문 교통 수단 변경 이벤트 발생시
export const pubUpdateTransportation = (
  pubUpdateTransportation: pubUpdateTransportation,
  tripItemId: number,
) => {
  socketClient.publish({
    destination: `/pub/tripItems/${tripItemId}/updateTransportation`,
    body: JSON.stringify(pubUpdateTransportation),
  });
};

// 여행 아이템 방문 날짜 변경 이벤트 발생시
export const pubUpdateVisitDate = (
  pubUpdateVisitDate: pubVisitDate,
  tripItemId: number,
) => {
  socketClient.publish({
    destination: `/pub/tripItems/${tripItemId}/updateVisitDate`,
    body: JSON.stringify(pubUpdateVisitDate),
  });
};

// 여행 아이템 삭제 이벤트 발생시
export const pubDeleteItem = (tripItemId: number) => {
  socketClient.publish({
    destination: `/pub/tripItems/${tripItemId}/deleteItem`,
  });
};

// 멤버 여정 페이지로 입장 이벤트 발생시
export const pubConnectMember = (pubMember: pubMember, tripId: number) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/connectMember`,
    body: JSON.stringify(pubMember),
  });
};

// 멤버 여정 페이지 퇴장 이벤트 발생시
export const pubDisconnectMember = (pubMember: pubMember, tripId: number) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/disconnectMember`,
    body: JSON.stringify(pubMember),
  });
};

// 여정 편집 페이지 입장 이벤트 발생시(모든 sub 다받음)
export const pubEnterMember = (pubMember: pubMember, tripId: number) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/enterMember`,
    body: JSON.stringify(pubMember),
  });
};

// 날짜별 여행 아이템 & 경로 조회
export const pubGetPathAndItems = (
  pubGetPathAndItems: pubVisitDate,
  tripId: number,
) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/getPathAndItems`,
    body: JSON.stringify(pubGetPathAndItems),
  });
};
