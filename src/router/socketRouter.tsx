import { Route, Routes } from 'react-router-dom';
import { useSocket, socketContext } from '@hooks/useSocket';
import PlanTrip from '@pages/plan/planTrip.page';
import PlanPlaceTrip from '@pages/plan/planPlaceTrip.page';
import PlanPlaceSearch from '@pages/plan/planPlaceSearch.page';
import Trip from '@pages/trip/trip.page';
import MainLayout from './routerLayout';
// import { useParams } from 'react-router-dom';

const SocketRoutes = () => {
  // const { id: tripId } = useParams();

  // if (!tripId) {
  //   return <div>error</div>;
  // }

  // const tripId = 1;
  // const visitDate = '2024-01-04';

  return (
    <socketContext.Provider value={useSocket()}>
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
