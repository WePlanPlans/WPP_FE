import { useRecoilValue } from 'recoil';
import { selectedItemsState } from '@recoil/listItem';
import { ButtonPrimary } from '@components/common/button/Button';
import { postTripsLike } from '@api/trips';
// import { useNavigate } from 'react-router-dom';

const AddToListButton = () => {
  const selectedTourItemIds = useRecoilValue(selectedItemsState);
  // const navigate = useNavigate();

  const getTripIdFromUrl = () => {
    const pathSegments = window.location.pathname.split('/');
    const tripIdIndex =
      pathSegments.findIndex((segment) => segment === 'trip') + 1;
    return pathSegments[tripIdIndex]
      ? parseInt(pathSegments[tripIdIndex], 10)
      : null;
  };

  const handleAddClick = async () => {
    const tripId = getTripIdFromUrl();
    if (tripId) {
      try {
        const response = await postTripsLike(tripId, selectedTourItemIds);
        console.log('API response:', response);
        // navigate(`/trip/${tripId}`);
      } catch (error) {
        console.error('API error:', error);
      }
    }
  };

  return <ButtonPrimary onClick={handleAddClick}>추가하기</ButtonPrimary>;
};

export default AddToListButton;
