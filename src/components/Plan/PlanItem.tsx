import { useEffect } from 'react';
import { socketClient } from '@api/socket';
import {
  subInfo,
  subItem,
  subPath,
  subMember,
  subBudget,
  pubEnterMember,
} from '@api/socket';
import SubmitBtn from '@components/common/button/SubmitBtn';
import { PlusIcon } from '@components/common/icons/Icons';
import { useNavigate } from 'react-router-dom';

const tripId = 1;
const visitDate = '2024-01-07';
const pubMember = {
  memberId: 1,
};

const PlanItem = () => {
  const navigate = useNavigate();

  const socketConnect = () => {
    socketClient.onConnect = () => {
      subInfo(tripId);
      subItem(tripId, visitDate);
      subPath(tripId, visitDate);
      subMember(tripId);
      subBudget(tripId);
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
