import { Route, Routes } from 'react-router-dom';
import { useSocket, socketContext } from '@hooks/useSocket';
import PlanTrip from '@pages/plan/planTrip.page';
import { PlanAddPlace } from '@pages/plan/addToOurPlace/PlanAddPlace.page';
import PlanPlaceSearch from '@pages/plan/planPlaceSearch.page';
import Trip from '@pages/trip/trip.page';
import MainLayout from './routerLayout';
import { useRecoilValue } from 'recoil';
import { tripIdState, visitDateState } from '@recoil/socket';
import Share from '@pages/share/share.page';
import ShareCode from '@pages/share/shareCode.page';
import { AddOurList } from '@pages/trip/AddOurList';


const SocketRoutes = () => {
  const tripId = useRecoilValue(tripIdState);
  const visitDate = useRecoilValue(visitDateState);
  if (!tripId || !visitDate) {
    return <div>에러</div>;
  }

  return (
    <socketContext.Provider value={useSocket(tripId, visitDate?.visitDate)}>
      <Routes>
        <Route path="/" element={<PlanTrip />} />
        <Route path="/place" element={<PlanAddPlace />} />
        <Route path="/place/search" element={<PlanPlaceSearch />} />
      </Routes>
    </socketContext.Provider>
  );
};

const SocketRouter = () => {
  return (
    <Routes>
      <Route path="/trip" element={<MainLayout />}>
        <Route path=":id" element={<Trip />} />
        <Route path=":id/share" element={<Share />} />
        <Route path=":id/code" element={<ShareCode />} />
        <Route path=":id/add" element={<AddOurList />} />
        <Route path=":id/plan/*" element={<SocketRoutes />} />
      </Route>
    </Routes>
  );
};

export default SocketRouter;
