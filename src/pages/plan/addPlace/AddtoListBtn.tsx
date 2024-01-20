import { useRecoilValue } from 'recoil';
import { selectedItemsState } from '@recoil/listItem';
import { ButtonPrimary } from '@components/common/button/Button';
import { postTripsLike, putTrips } from '@api/trips';
import { getTripIdFromUrl } from '@utils/getTripIdFromUrl';

const AddToListButton = ({
  apiType,
}: {
  apiType: 'postTripsLike' | 'putTrips';
}) => {
  const selectedTourItemIds = useRecoilValue(selectedItemsState);
  const VISIT_DATE = '2024-02-01';

  const handleAddClick = async () => {
    const tripId = getTripIdFromUrl();
    if (tripId) {
      try {
        let response;
        if (apiType === 'postTripsLike') {
          response = await postTripsLike(tripId, selectedTourItemIds);
        } else if (apiType === 'putTrips' && selectedTourItemIds.length > 0) {
          response = await putTrips(tripId, selectedTourItemIds[0], VISIT_DATE);
        }
        console.log('API response:', response);
      } catch (error) {
        console.error('API error:', error);
      }
    }
  };

  return <ButtonPrimary onClick={handleAddClick}>추가하기</ButtonPrimary>;
};

export default AddToListButton;
