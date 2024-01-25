import {
  socketClient,
  subInfo,
  subItem,
  subPath,
  subMember,
  subBudget,
  subCursor,
} from '@api/socket';
import {
  subInfoRes,
  subItemRes,
  subPathRes,
  subMemberRes,
  subBudgetRes,
  subCursorRes,
  SocketContextType,
} from '@/@types/service';
import { createContext } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { visitDateState } from '@recoil/socket';

export const socketContext = createContext<SocketContextType>({
  tripInfo: null,
  tripItem: null,
  tripPath: null,
  tripMember: null,
  tripBudget: null,
  tripCursor: null,
  tripId: '',
  callBackPub: () => {},
});

export const useSocket = () => {
  const { id } = useParams();
  const tripId = id ?? '';
  const visitDate = useRecoilValue(visitDateState);

  const [tripInfo, setTripInfo] = useState<subInfoRes | null>(null);
  const [tripItem, setTripItem] = useState<subItemRes | null>(null);
  const [tripPath, setTripPath] = useState<subPathRes | null>(null);
  const [tripMember, setTripMember] = useState<subMemberRes | null>(null);
  const [tripBudget, setTripBudget] = useState<subBudgetRes | null>(null);
  const [tripCursor, setTripCursor] = useState<subCursorRes | null>(null);

  const [socketCallback, setSocketCallback] = useState<(() => void) | null>(
    null,
  );

  const callBackPub = (callback: () => void): void => {
    setSocketCallback(() => callback);
  };

  const socketConnect = (tripId: string, visitDate: string) => {
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

      subCursor(tripId, visitDate, (res) => {
        if (res) {
          setTripCursor(res);
        }
      });

      if (socketCallback) {
        socketCallback();
      }
    };

    socketClient.activate();
  };

  useEffect(() => {
    if (tripId && visitDate) {
      socketConnect(tripId, visitDate.visitDate);
    }
    console.log('소켓연결');

    return () => {
      socketClient.deactivate();
      console.log('소켓해제');
    };
  }, [tripId, visitDate, socketCallback]);

  return {
    tripInfo,
    tripItem,
    tripPath,
    tripMember,
    tripBudget,
    tripCursor,
    tripId,
    callBackPub,
  };
};
