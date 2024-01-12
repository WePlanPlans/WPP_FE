import PlanPlaceSearch from '@pages/plan/planPlaceSearch.page';
import PlanPlaceTrip from '@pages/plan/planPlaceTrip.page';
import PlanTrip from '@pages/plan/planTrip.page';
import Trip from '@pages/trip/trip.page';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './routerLayout';

const SocketRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/trip/:id" element={<Trip />} />
          <Route path="/trip/:id/plan" element={<PlanTrip />} />
          <Route path="/trip/:id/plan/place" element={<PlanPlaceTrip />} />
          <Route
            path="/trip/:id/plan/place/search"
            element={<PlanPlaceSearch />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default SocketRouter;
