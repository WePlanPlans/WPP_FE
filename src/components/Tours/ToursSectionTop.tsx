import ToursCategory from './ToursCategory';
import ToursList from './ToursList';

const ToursSectionTop = () => {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white py-0.5">
        <h1 className="title2 pt-3">지금 인기여행지</h1>
        <ToursCategory />
      </div>

      <ToursList />
    </>
  );
};

export default ToursSectionTop;
