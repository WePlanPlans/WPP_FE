import { Route, Routes } from 'react-router-dom';
import { useSocket, socketContext } from '@hooks/useSocket';
import PlanTrip from '@pages/plan/planTrip.page';
import { PlanAddPlace } from '@components/addToList/addToOurPlace/PlanAddPlace.page';
import Trip from '@pages/trip/trip.page';
import MainLayout from './routerLayout';
import Share from '@pages/share/share.page';
import ShareCode from '@pages/share/shareCode.page';
import { AddOurList } from '@pages/trip/AddOurList.page';
import TripEdit from '@pages/trip/tripEdit.page';

const SocketRoutes = () => {
  return (
    <socketContext.Provider value={useSocket()}>
      <Routes>
        <Route path="/" element={<PlanTrip />} />
        <Route path="/place" element={<PlanAddPlace />} />
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
        <Route path=":id/edit" element={<TripEdit />} />
        <Route path=":id/plan/*" element={<SocketRoutes />} />
      </Route>
    </Routes>
  );
};

export default SocketRouter;
