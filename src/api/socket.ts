import * as StompJs from '@stomp/stompjs';

export const socketClient = new StompJs.Client({
  brokerURL: import.meta.env.VITE_SOCKET_URL,
  heartbeatIncoming: 1000,
  heartbeatOutgoing: 1000,
});

// 소켓 구독
// 여정 기본 정보
export const subInfo = (tripId: string, subInfoMessage: subInfoMessage) => {
  socketClient.subscribe(`/sub/${tripId}/info`, (message) => {
    const res = JSON.parse(message.body);
    subInfoMessage(res);
  });
};

// 방문 날짜별 여정 여행 아이템 정보
export const subItem = (
  tripId: string,
  visitDate: string,
  subItemMessage: subItemMessage,
) => {
  socketClient.subscribe(`/sub/${tripId}/tripItems/${visitDate}`, (message) => {
    const res = JSON.parse(message.body);
    subItemMessage(res);
  });
};

// 방문 날짜별 여정 경로 정보
export const subPath = (
  tripId: string,
  visitDate: string,
  subPathMessage: subPathMessage,
) => {
  socketClient.subscribe(`/sub/${tripId}/path/${visitDate}`, (message) => {
    const res = JSON.parse(message.body);
    subPathMessage(res);
  });
};

// 연결된 멤버 정보
export const subMember = (
  tripId: string,
  subMemberMessage: subMemberMessage,
) => {
  socketClient.subscribe(`/sub/${tripId}/connectedMember`, (message) => {
    const res = JSON.parse(message.body);
    subMemberMessage(res);
  });
};

// 목표 경비, 실제 발생 비용
export const subBudget = (
  tripId: string,
  subBudgetMessage: subBudgetMessage,
) => {
  socketClient.subscribe(`/sub/${tripId}/budget`, (message) => {
    const res = JSON.parse(message.body);
    subBudgetMessage(res);
  });
};

// 소켓 전송
// 여정 기본 정보 변경 이벤트 발생시
export const pubInfo = (pubInfo: pubInfo, tripId: string) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/info`,
    body: JSON.stringify(pubInfo),
  });
};

// 여정에 여행 아이템 추가 이벤트 발생시
export const pubAddTripItem = (
  pubAddTripItem: pubAddTripItem,
  tripId: string,
) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/addTripItems`,
    body: JSON.stringify(pubAddTripItem),
  });
};

// 여행 아이템 예상 가격 업데이트 이벤트 발생시
export const pubUpdatePrice = (
  pubUpdatePrice: pubUpdatePrice,
  tripItemId: string,
) => {
  socketClient.publish({
    destination: `/pub/tripItems/${tripItemId}/updatePrice`,
    body: JSON.stringify(pubUpdatePrice),
  });
};

// 여행 아이템 방문 순서 변경 이벤트 발생시
export const pubUpdateTripItem = (
  pubUpdateTripItem: pubUpdateTripItem,
  tripId: string,
) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/updateTripItemOrder`,
    body: JSON.stringify(pubUpdateTripItem),
  });

  console.log(pubUpdateTripItem);
  console.log('펍실행');
};

// 여행 날짜별 교통 수단 변경 이벤트 발생시 (01/16 업데이트)
export const pubUpdateTransportation = (
  pubUpdateTransportation: pubUpdateTransportation,
  trips: string,
) => {
  socketClient.publish({
    destination: `/pub/trips/${trips}/updateTransportation`,
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
export const pubDeleteItem = (
  pubDeleteItem: pubDeleteItem,
  tripItemId: number,
) => {
  socketClient.publish({
    destination: `/pub/tripItems/${tripItemId}/deleteItem`,
    body: JSON.stringify(pubDeleteItem),
  });
  console.log(pubDeleteItem);
};

// 멤버 여정 페이지로 입장 이벤트 발생시
export const pubConnectMember = (pubMember: pubMember, tripId: string) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/connectMember`,
    body: JSON.stringify(pubMember),
  });
};

// 멤버 여정 페이지 퇴장 이벤트 발생시
export const pubDisconnectMember = (pubMember: pubMember, tripId: string) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/disconnectMember`,
    body: JSON.stringify(pubMember),
  });
};

// 여정 편집 페이지 입장 이벤트 발생시(모든 sub 다받음)
export const pubEnterMember = (pubMember: pubMember, tripId: string) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/enterMember`,
    body: JSON.stringify(pubMember),
  });
};

// 날짜별 여행 아이템 & 경로 조회
export const pubGetPathAndItems = (
  pubGetPathAndItems: pubGetPathAndItems,
  tripId: string,
) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/getPathAndItems`,
    body: JSON.stringify(pubGetPathAndItems),
  });
};

// 접속중인 멤버 정보 조회
export const pubGetConnectedMember = (tripId: string) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/getConnectedMember`,
  });
};

// 목표 경비(예산) 변경시
export const pubUpdateBudget = (
  pubUpdateBudget: pubUpdateBudget,
  tripId: string,
) => {
  socketClient.publish({
    destination: `/pub/trips/${tripId}/updateBudget`,
    body: JSON.stringify(pubUpdateBudget),
  });
};
