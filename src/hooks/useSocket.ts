import {
  socketClient,
  subInfo,
  subItem,
  subPath,
  subMember,
  subBudget,
} from '@api/socket';
import {
  subInfoRes,
  subItemRes,
  subPathRes,
  subMemberRes,
  subBudgetRes,
  SocketContextType,
} from '@/@types/service';
import { createContext } from 'react';
import { useState, useEffect } from 'react';

export const socketContext = createContext<SocketContextType>({
  tripInfo: null,
  tripItem: null,
  tripPath: null,
  tripMember: null,
  tripBudget: null,
  callBackPub: () => {},
});

export const useSocket = (tripId: string, visitDate: string) => {
  const [tripInfo, setTripInfo] = useState<subInfoRes | null>(null);
  const [tripItem, setTripItem] = useState<subItemRes | null>(null);
  const [tripPath, setTripPath] = useState<subPathRes | null>(null);
  const [tripMember, setTripMember] = useState<subMemberRes | null>(null);
  const [tripBudget, setTripBudget] = useState<subBudgetRes | null>(null);

  let socketCallback: (() => void) | null = null;

  const callBackPub = (callback: () => void): void => {
    socketCallback = callback;
  };

  const socketConnect = () => {
    socketClient.onConnect = () => {
      subInfo(tripId, (res) => {
        if (res) {
          setTripInfo(res);
        }
      });

      subItem(tripId, visitDate, (res) => {
        if (res) {
          setTripItem(res);
        }
      });

      subPath(tripId, visitDate, (res) => {
        if (res) {
          setTripPath(res);
        }
      });

      subMember(tripId, (res) => {
        if (res) {
          setTripMember(res);
        }
      });

      subBudget(tripId, (res) => {
        if (res) {
          setTripBudget(res);
        }
      });

      if (socketCallback) {
        socketCallback();
      }
    };

    socketClient.activate();
    console.log('소켓연결');
  };

  useEffect(() => {
    socketConnect();
    return () => {
      socketClient.deactivate();
      console.log('소켓연결해제');
    };
  }, []);

  return { tripInfo, tripItem, tripPath, tripMember, tripBudget, callBackPub };
};

// // 콜백들을 저장할 배열
// let socketCallbacks = [];

// // 콜백을 배열에 추가하는 함수
// const callBackPub = (callback) => {
//   socketCallbacks.push(callback);
// };

// // 모든 콜백을 실행하는 함수
// const executeCallbacks = () => {
//   socketCallbacks.forEach(callback => {
//     callback();
//   });
// };
