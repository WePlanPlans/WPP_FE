import CreateTripButton from '@components/Tours/CreateTripButton';
import ToursSectionTop from '@components/Tours/ToursSectionTop';
import { StartSearchButton } from '@components/search/StartSearchBtn';

const Main = () => {
  return (
    <>
      <StartSearchButton />
      <ToursSectionTop />
      <CreateTripButton />
    </>
  );
};

export default Main;
