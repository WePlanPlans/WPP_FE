import { Route, Routes } from 'react-router-dom';
import { useSocket, socketContext } from '@hooks/useSocket';
import PlanTrip from '@pages/plan/planTrip.page';
import PlanPlaceTrip from '@pages/plan/planPlaceTrip.page';
import PlanPlaceSearch from '@pages/plan/planPlaceSearch.page';
import Trip from '@pages/trip/trip.page';
import MainLayout from './routerLayout';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tripIdState } from '@recoil/socket';
import { useEffect } from 'react';

const SocketRoutes = () => {
  const { id: tripId } = useParams();
  const [currentTripId, setCurrentTripId] = useRecoilState(tripIdState);

  useEffect(() => {
    if (tripId) {
      setCurrentTripId(tripId);
    }
  }, [tripId]);

  const visitDate = null;

  return (
    <socketContext.Provider
      value={
        currentTripId && visitDate ? useSocket(currentTripId, visitDate) : null
      }>
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
