import { useState, useEffect } from 'react';
import { socketClient } from '@api/socket';
import {
  subInfo,
  subItem,
  subPath,
  subMember,
  subBudget,
  pubEnterMember,
} from '@api/socket';

import {
  subInfoRes,
  subItemRes,
  subPathRes,
  subMemberRes,
  subBudgetRes,
} from '@/@types/service';
import SubmitBtn from '@components/common/button/SubmitBtn';
import { PlusIcon } from '@components/common/icons/Icons';
import { useNavigate } from 'react-router-dom';

const tripId = 1;
const visitDate = '2024-01-03';
const pubMember = {
  memberId: 1,
};

const PlanItem = () => {
  const navigate = useNavigate();

  const [tripInfo, setTripInfo] = useState<subInfoRes | null>(null);
  const [tripItem, setTripItem] = useState<subItemRes | null>(null);
  const [tripPath, setTripPath] = useState<subPathRes | null>(null);
  const [tripMember, setTripMember] = useState<subMemberRes | null>(null);
  const [tripBudget, setTripBudget] = useState<subBudgetRes | null>(null);

  if (tripInfo != null) {
    console.log(tripInfo);
  }
  
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

      pubEnterMember(pubMember, tripId);
    };

    socketClient.activate();
  };

  useEffect(() => {
    socketConnect();

    return () => {
      socketClient.deactivate();
    };
  }, []);
  return (
    <>
      <SubmitBtn onClick={() => navigate('./place')}>
        <div className="flex items-center justify-center gap-[5px]">
          <PlusIcon color="white" />
          장소 추가
        </div>
      </SubmitBtn>
    </>
  );
};

export default PlanItem;
