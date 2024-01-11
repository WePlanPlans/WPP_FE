import PlanPlaceSearch from '@pages/plan/planPlaceSearch.page';
import PlanPlaceTrip from '@pages/plan/planPlaceTrip.page';
import PlanTrip from '@pages/plan/planTrip.page';
import Trip from '@pages/trip/trip.page';
import { Route, Routes } from 'react-router-dom';

const SocketRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/trip/:id" element={<Trip />} />
        <Route path="/trip/:id/plan" element={<PlanTrip />} />
        <Route path="/trip/:id/plan/place" element={<PlanPlaceTrip />} />
        <Route
          path="/trip/:id/plan/place/search"
          element={<PlanPlaceSearch />}
        />
      </Routes>
    </>
  );
};

export default SocketRouter;
