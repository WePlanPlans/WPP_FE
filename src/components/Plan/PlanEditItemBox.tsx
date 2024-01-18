import { PenIcon, DragAndDropIcon } from '@components/common/icons/Icons';
import { TripItem } from '@/@types/service';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { useState, useEffect } from 'react';
import { pubUpdateTripItem } from '@api/socket';
import { useContext } from 'react';
import { socketContext } from '@hooks/useSocket';
import { pubUpdateTripItemReq } from '@/@types/service';

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

  const { callBackPub } = useContext(socketContext);

  const [items, setItems] = useState(item);
  const [newData, setNewData] = useState<pubUpdateTripItemReq | null>(null);

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

    console.log(newData);
  };

  useEffect(() => {
    if (newData && tripId) {
      callBackPub(() => pubUpdateTripItem(newData, tripId));
    }
  }, [newData]);

  console.log(newData);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppableId">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <div className="text-left text-sm font-semibold ">{day}</div>
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
                        className="ml-[2px] mr-[5px] "></input>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="mb-[8px] flex  h-[87.5px] rounded-lg border border-solid border-[#ededed] bg-white">
                        <img
                          className="h-[87px] w-[93px] rounded-bl-lg rounded-tl-lg "
                          src={item.thumbnailUrl}
                          alt="img"
                        />
                        <div className="flex w-full flex-col p-[10px]">
                          <div className="flex justify-between text-left text-[14px] font-medium text-black">
                            {item.name}
                            <PenIcon size={14} className="cursor-pointer" />
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
  );
};

export default PlanEditItemBox;

{
  /* <>
<div>
  <div className="text-left text-sm font-semibold ">{day}</div>
  {item.map((item) => (
    <div key={item.tripItemId} className="flex">
      <div className="relative ml-[5px] mr-[17px] flex h-[87.5px] items-center">
        <input
          type="radio"
          name="options"
          className="ml-[2px] mr-[5px] "></input>
      </div>
      <div className="flex w-full flex-col">
        <div className="mb-[8px] flex  h-[87.5px] rounded-lg border border-solid border-[#ededed] bg-white">
          <img
            className="h-[87px] w-[93px] rounded-bl-lg rounded-tl-lg "
            src={item.thumbnailUrl}
            alt="img"
          />
          <div className="flex w-full flex-col p-[10px]">
            <div className="flex justify-between text-left text-[14px] font-medium text-black">
              {item.name}
              <PenIcon size={14} className="cursor-pointer" />
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
      <div className="relative ml-[13px] flex h-[87.5px] items-center">
        <DragAndDropIcon />
      </div>
    </div>
  ))}
</div>
</> */
}
