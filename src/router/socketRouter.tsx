import { Route, Routes } from 'react-router-dom';
import { useSocket, socketContext } from '@hooks/useSocket';
import PlanTrip from '@pages/plan/planTrip.page';
import { PlanAddPlace } from '@pages/plan/addPlace/PlanAddPlace.page';
import PlanPlaceSearch from '@pages/plan/planPlaceSearch.page';
import Trip from '@pages/trip/trip.page';
import MainLayout from './routerLayout';
import { AddOurList } from '@pages/trip/AddOurList';

const SocketRoutes = () => {
  return (
    <socketContext.Provider value={useSocket()}>
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
        <Route path=":id/add" element={<AddOurList />} />
        <Route path=":id/plan/*" element={<SocketRoutes />} />
      </Route>
    </Routes>
  );
};

export default SocketRouter;
