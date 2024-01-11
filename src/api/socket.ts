import * as StompJs from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export const socketClient = new StompJs.Client({
  webSocketFactory: () => new SockJS('https://ws.weplanplans.site/ws-stomp'),
});
