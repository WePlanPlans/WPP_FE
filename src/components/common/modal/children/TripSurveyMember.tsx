import React from 'react';
import { ParticipantStatus } from '@components/Trip/TripParticipant';
import Tab from '@components/common/tab/Tab';

const TripSurveyMember: React.FC = () => {
  return (
    <div className="mt-2">
      <Tab
        lists={['참여', '미참여']}
        contents={[
          <ParticipantStatus status="참여" />,
          <ParticipantStatus status="미참여" />,
        ]}
      />
    </div>
  );
};

export default TripSurveyMember;
