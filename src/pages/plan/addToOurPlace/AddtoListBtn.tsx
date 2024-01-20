import { useRecoilValue } from 'recoil';
import { selectedItemsState } from '@recoil/listItem';
import { ButtonPrimary } from '@components/common/button/Button';
import { postTripsLike } from '@api/trips';
import { getTripIdFromUrl } from '@utils/getTripIdFromUrl';
import { useNavigate } from 'react-router-dom';
import { pubAddTripItem } from '@api/socket';
import { useContext } from 'react';
import { socketContext } from '@hooks/useSocket';
import { visitDateState } from '@recoil/socket';

const AddToListButton = ({
  apiType,
}: {
  apiType: 'postTripsLike' | 'putTrips';
}) => {
  const selectedTourItemIds = useRecoilValue(selectedItemsState);
  console.log('selectedTourItemIds', selectedTourItemIds);
  const visitDate = useRecoilValue(visitDateState);
  console.log('visitDate', visitDate);

  const { callBackPub } = useContext(socketContext);
  const navigate = useNavigate();

  const handleAddClick = async () => {
    const tripId = getTripIdFromUrl().toString();
    if (tripId) {
      try {
        let response;
        if (apiType === 'postTripsLike') {
          response = await postTripsLike(tripId, selectedTourItemIds);
          navigate(`/trip/${tripId}`);
        } else if (apiType === 'putTrips' && visitDate) {
          const newTripItems = selectedTourItemIds.map((tourItemId) => ({
            tourItemId: tourItemId,
          }));

          const pubAddTripItemData = {
            visitDate: visitDate.visitDate,
            newTripItems,
          };

          console.log('pubAddTripItemData', pubAddTripItemData);
          callBackPub(() => pubAddTripItem(pubAddTripItemData, tripId));
          navigate(`/trip/${tripId}/plan`);
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
