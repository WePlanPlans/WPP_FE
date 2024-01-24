import { useEffect, useState, useContext } from 'react';
import { BsFillCursorFill } from 'react-icons/bs';
import { pubCursor } from '@api/socket';
import { socketContext } from '@hooks/useSocket';
import { useGetTripsAuthority } from '@hooks/useGetTripsAuthority';

type TripCursorData = {
  memberId: number;
  x: number;
  y: number;
  name: string;
};

type PlanCursorProps = {
  date: string;
};

const PlanOtherCursor = () => {
  const { memberId } = useGetTripsAuthority();
  const { tripCursor } = useContext(socketContext);
  const [otherCursors, setOtherCursors] = useState<TripCursorData[]>([]);

  console.log(otherCursors);
  useEffect(() => {
    if (
      tripCursor &&
      tripCursor.data &&
      tripCursor.data.memberId !== memberId
    ) {
      setOtherCursors((prevCursors) => {
        const existingCursorIndex = prevCursors.findIndex(
          (cursor) => cursor.memberId === tripCursor.data!.memberId,
        );

        if (existingCursorIndex !== -1) {
          const updatedCursors = [...prevCursors];
          updatedCursors[existingCursorIndex] = tripCursor.data!;
          return updatedCursors;
        } else {
          return [...prevCursors, tripCursor.data!];
        }
      });
    }
  }, [tripCursor, memberId]);

  return (
    <>
      {otherCursors.map((cursor, index) => (
        <div
          key={index}
          className="pointer-events-none fixed z-50 w-full -translate-x-2 -translate-y-2 transform"
          style={{ left: `${cursor.x}px`, top: `${cursor.y}px` }}>
          <BsFillCursorFill size={15} color="red" className="scale-x-[-1]" />
          <div className="text-bold absolute left-1 top-2 p-1 text-center text-xs text-red">
            {cursor.name}
          </div>
        </div>
      ))}
    </>
  );
};

export default PlanOtherCursor;
