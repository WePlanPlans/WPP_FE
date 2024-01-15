import {
  socketClient,
  subInfo,
  subItem,
  subPath,
  subMember,
  subBudget,
  pubEnterMember,
  pubGetPathAndItems,
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
});

const tripId = '1';
const visitDate = '2024-01-03';

export const useSocket = () => {
  const [tripInfo, setTripInfo] = useState<subInfoRes | null>(null);
  const [tripItem, setTripItem] = useState<subItemRes | null>(null);
  const [tripPath, setTripPath] = useState<subPathRes | null>(null);
  const [tripMember, setTripMember] = useState<subMemberRes | null>(null);
  const [tripBudget, setTripBudget] = useState<subBudgetRes | null>(null);

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
      const memberId = {
        memberId: 1,
      };

      pubEnterMember(memberId, '1');
      pubGetPathAndItems({ visitDate: '2024-01-04' }, '1');

      console.log(tripInfo);
      console.log(tripItem);
      console.log(tripPath);
      console.log(tripMember);
      console.log(tripBudget);
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

  return { tripInfo, tripItem, tripPath, tripMember, tripBudget };
};
