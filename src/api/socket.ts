import * as StompJs from '@stomp/stompjs';

export const socketClient = new StompJs.Client({
  brokerURL: import.meta.env.VITE_SOCKET_URL,
});
