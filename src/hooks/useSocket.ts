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

  const [socketCallback, setSocketCallback] = useState<(() => void) | null>(
    null,
  );

  const callBackPub = (callback: () => void): void => {
    setSocketCallback(() => callback);
  };

  const socketConnect = () => {
    socketClient.onConnect = () => {
      subInfo(tripId, (res) => {
        if (res) {
          setTripInfo(res);
        }
      });

      console.log('sub외부', visitDate);

      subItem(tripId, visitDate, (res) => {
        console.log('sub내부', visitDate);
        if (res) {
          setTripItem(res);
          console.log('상태변경실행');
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
        console.log('소켓커넥트내부', socketCallback);
      }
    };

    socketClient.activate();
  };

  useEffect(() => {
    socketConnect();

    return () => {
      socketClient.deactivate();
    };
  }, [tripId, visitDate, socketCallback]);

  return { tripInfo, tripItem, tripPath, tripMember, tripBudget, callBackPub };
};
