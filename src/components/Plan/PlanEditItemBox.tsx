import { DragAndDropIcon } from '@components/common/icons/Icons';
import { TripItem } from '@/@types/service';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { useState, useEffect } from 'react';
import { pubUpdateTripItem, pubDeleteItem } from '@api/socket';
import { pubUpdateTripItemReq } from '@/@types/service';
import Alert from '@components/common/alert/Alert';
import ToastPopUp from '@components/common/toastpopup/ToastPopUp';
import PlanMoveItem from './PlanMoveItem';
import { useRecoilState } from 'recoil';
import { isEditState } from '@recoil/socket';
import { debounce } from 'lodash';

type PlanItemBoxProps = {
  item: TripItem[];
  day: string;
  visitDate: string;
  tripId: string;
};

const PlanEditItemBox = ({
  item,
  day,
  visitDate,
  tripId,
}: PlanItemBoxProps) => {
  if (!item) {
    return <div>Missing data</div>;
  }

  const [, setIsEdit] = useRecoilState(isEditState);
  const [items, setItems] = useState(item);
  const [newData, setNewData] = useState<pubUpdateTripItemReq | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [toastPopUp, setToastPopUp] = useState({
    isPopUp: false,
    noun: '',
    verb: '',
  });

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const reorderedItems = Array.from(items);
    const [relocatedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, relocatedItem);
    setItems(reorderedItems);

    const tripItemOrder = reorderedItems.map((item, index) => ({
      tripItemId: item.tripItemId,
      seqNum: index + 1,
    }));

    setNewData({
      visitDate: visitDate,
      tripItemOrder,
    });
  };

  const debouncedPubUpdateTripItem = debounce((newData, tripId) => {
    pubUpdateTripItem(newData, tripId);
  }, 1000);

  useEffect(() => {
    if (newData && tripId) {
      debouncedPubUpdateTripItem(newData, tripId);
    }
  }, [newData]);

  const handleConfirm = () => {
    if (tripId && visitDate && selectedItemId) {
      pubDeleteItem({ tripId: tripId, visitDate: visitDate }, selectedItemId);
    }
    setToastPopUp(() => ({
      isPopUp: true,
      noun: '여행지',
      verb: '삭제',
    }));
    setIsEdit(false);
  };

  const handleRadioChange = (id: number | null) => {
    setSelectedItemId(id);
  };

  useEffect(() => {
    if (toastPopUp.isPopUp) {
      const timer = setTimeout(() => {
        setToastPopUp(() => ({
          isPopUp: false,
          noun: '',
          verb: '',
        }));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [toastPopUp]);

  return (
    <>
      {toastPopUp.isPopUp && (
        <ToastPopUp noun={toastPopUp.noun} verb={toastPopUp.verb} />
      )}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppableId">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="mb-[68px]">
              <div className="text-left text-sm font-semibold">{day}</div>
              {items.map((item, index) => (
                <Draggable
                  key={item.tripItemId.toString()}
                  draggableId={item.tripItemId.toString()}
                  index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="flex">
                      <div className="relative ml-[5px] mr-[17px] flex h-[87.5px] items-center">
                        <input
                          type="radio"
                          name="options"
                          className="ml-[2px] mr-[5px]"
                          onChange={() => handleRadioChange(item.tripItemId)}
                          checked={selectedItemId === item.tripItemId}></input>
                      </div>
                      <div className="flex w-full flex-col">
                        <div className="mb-[8px] flex  h-[87.5px] rounded-lg border border-solid border-[#ededed] bg-white">
                          <img
                            className="h-[87px] w-[93px] rounded-bl-lg rounded-tl-lg "
                            src={item.thumbnailUrl}
                            alt="img"
                          />
                          <div className="flex w-full flex-col p-[10px]">
                            <div className="flex text-left text-[14px] font-medium text-black">
                              {item.name.length > 17
                                ? item.name.slice(0, 17) + '...'
                                : item.name}
                            </div>
                            <div className="mt-[3px] flex h-fit w-fit items-center justify-center gap-2 rounded-[3px] bg-[#ededed] p-[4px] text-center text-[11px] text-black">
                              {item.category}
                            </div>
                            <div className="mt-[15px] text-sm font-bold text-black">
                              {item.price} 원
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative ml-[13px] flex h-[87.5px] items-center"
                        {...provided.dragHandleProps}>
                        <DragAndDropIcon />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="fixed bottom-0 left-0 right-0 z-10 flex justify-center">
        <div className="mx-auto flex h-14 max-w-md">
          <Alert
            title={'여행지 삭제'}
            message={<>선택한 장소를 삭제하시겠습니까?</>}
            onConfirm={handleConfirm}
            closeOnConfirm={true}
            isCheck={selectedItemId}>
            <button
              type="button"
              className="flex w-[206px] items-center justify-center gap-2 bg-gray3 p-2 font-bold text-white">
              삭제하기
            </button>
          </Alert>
          <PlanMoveItem
            isCheck={selectedItemId}
            tripId={tripId}
            visitDate={visitDate}
          />
        </div>
      </div>
    </>
  );
};

export default PlanEditItemBox;
