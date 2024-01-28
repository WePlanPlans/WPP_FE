import { useRecoilState } from 'recoil';
import { selectedItemsState } from '@recoil/listItem';
import { ButtonPrimary } from '@components/common/button/Button';
import { postTripsLike } from '@api/trips';
import { useNavigate, useParams } from 'react-router-dom';
import { pubAddTripItem } from '@api/socket';
import { useContext } from 'react';
import { socketContext } from '@hooks/useSocket';
import { visitDateState } from '@recoil/socket';
import { calculateDayAndDate } from '@utils/utils';
import { tapState } from '@recoil/plan';

const AddToListButton = ({
  apiType,
}: {
  apiType: 'postTripsLike' | 'postTripsItem';
}) => {
  const { id: tripId } = useParams();
  const [selectedTourItemIds, setSelectedTourItemIds] =
    useRecoilState(selectedItemsState);
  const [visitDate, setVisitDate] = useRecoilState(visitDateState);
  const { callBackPub } = useContext(socketContext);
  const navigate = useNavigate();
  const { tripInfo } = useContext(socketContext);
  const startDate = tripInfo?.data?.startDate;
  const endDate = tripInfo?.data?.endDate;
  const [, setTapState] = useRecoilState(tapState);

  const handleAddClick = async () => {
    if (tripId) {
      try {
        // calculateDayAndDate 함수를 호출하여 DateArr 얻기
        const { DateArr } = calculateDayAndDate(startDate ?? '', endDate ?? '');

        // visitDate와 DateArr 비교하여 인덱스 찾기
        const dayIndex = DateArr.findIndex(
          (date) => date === visitDate?.visitDate,
        );
        const selectedDay = `${dayIndex}`;

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

          setVisitDate(visitDate);
          setTapState(selectedDay);
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
