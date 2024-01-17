import { Route, Routes } from 'react-router-dom';
import { useSocket, socketContext } from '@hooks/useSocket';
import PlanTrip from '@pages/plan/planTrip.page';
import PlanPlaceTrip from '@pages/plan/planPlaceTrip.page';
import PlanPlaceSearch from '@pages/plan/planPlaceSearch.page';
import Trip from '@pages/trip/trip.page';
import MainLayout from './routerLayout';
import { useRecoilValue } from 'recoil';
import { tripIdState, visitDateState } from '@recoil/socket';

const SocketRoutes = () => {
  const tripId = useRecoilValue(tripIdState);
  const visitDate = useRecoilValue(visitDateState);
  if (!tripId || !visitDate) {
    return <div>에러</div>;
  }

  return (
    <socketContext.Provider value={useSocket(tripId, visitDate?.visitDate)}>
      <Routes>
        <Route path="/plan" element={<PlanTrip />} />
        <Route path="/plan/place" element={<PlanPlaceTrip />} />
        <Route path="/plan/place/search" element={<PlanPlaceSearch />} />
      </Routes>
    </socketContext.Provider>
  );
};

const SocketRouter = () => {
  return (
    <Routes>
      <Route path="/trip" element={<MainLayout />}>
        <Route path=":id" element={<Trip />} />
        <Route path=":id/*" element={<SocketRoutes />} />
      </Route>
    </Routes>
  );
};

export default SocketRouter;
