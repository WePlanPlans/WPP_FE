import { useRecoilValue, useRecoilState } from 'recoil';
import { selectedItemsState } from '@recoil/listItem';
import { ButtonPrimary } from '@components/common/button/Button';
import { postTripsLike } from '@api/trips';
import { useNavigate, useParams } from 'react-router-dom';
import { pubAddTripItem } from '@api/socket';
import { useContext } from 'react';
import { socketContext } from '@hooks/useSocket';
import { visitDateState } from '@recoil/socket';

const AddToListButton = ({
  apiType,
}: {
  apiType: 'postTripsLike' | 'postTripsItem';
}) => {
  const { id: tripId } = useParams();
  const [selectedTourItemIds, setSelectedTourItemIds] =
    useRecoilState(selectedItemsState);
  const visitDate = useRecoilValue(visitDateState);
  console.log(selectedTourItemIds);
  const { callBackPub } = useContext(socketContext);
  const navigate = useNavigate();

  const handleAddClick = async () => {
    if (tripId) {
      try {
        if (apiType === 'postTripsLike') {
          await postTripsLike(tripId, selectedTourItemIds);
          navigate(`/trip/${tripId}`);
        } else if (apiType === 'postTripsItem' && visitDate) {
          const newTripItems = selectedTourItemIds.map((tourItemId) => ({
            tourItemId: tourItemId,
          }));

          const pubAddTripItemData = {
            visitDate: visitDate.visitDate,
            newTripItems,
          };

          callBackPub(() => pubAddTripItem(pubAddTripItemData, tripId));
          setTimeout(() => {
            setSelectedTourItemIds([]);
            navigate(`/trip/${tripId}/plan`);
          }, 500);
        }
      } catch (error) {
        console.error('API error:', error);
      }
    }
  };

  return <ButtonPrimary onClick={handleAddClick}>추가하기</ButtonPrimary>;
};

export default AddToListButton;
