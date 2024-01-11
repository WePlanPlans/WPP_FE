import CreateTripButton from '@components/Tours/CreateTripButton';
import ToursSectionTop from '@components/Tours/ToursSectionTop';
import { StartSearchButton } from '@components/search/StartSearchBtn';
import { useEffect } from 'react';
import { socketClient } from '@api/socket';

const message = {
  memberId: '제발되라',
};

const Main = () => {
  const connect = () => {
    console.log('시작');
    socketClient.onConnect = () => {
      console.log('소켓 연결됨');

      socketClient.subscribe('ws-stomp', (message) => {
        console.log('받은 메시지:', message.body);
      });

      socketClient.publish({
        destination: 'ws-stomp',
        body: JSON.stringify(message),
      });
    };

    socketClient.activate();
  };

  useEffect(() => {
    connect();
  }, []);

  return (
    <>
      <StartSearchButton />
      <ToursSectionTop />
      <CreateTripButton />
    </>
  );
};

export default Main;
