import { useEffect, useState, useContext } from 'react';
import { BsFillCursorFill } from 'react-icons/bs';
import { socketContext } from '@hooks/useSocket';
import { useGetTripsAuthority } from '@hooks/useGetTripsAuthority';
import { useRecoilValue } from 'recoil';
import { visitDateState } from '@recoil/socket';

type TripCursorData = {
  color: string;
  memberId: number;
  tripId: string;
  visitDate: string;
  x: number;
  y: number;
  name: string;
};

const PlanOtherCursor = () => {
  const visitDate = useRecoilValue(visitDateState);
  const { memberId } = useGetTripsAuthority();
  const { tripCursor } = useContext(socketContext);
  const [otherCursors, setOtherCursors] = useState<TripCursorData[]>([]);

  useEffect(() => {
    if (tripCursor?.data && tripCursor.data.memberId !== memberId) {
      setOtherCursors((prevCursors) => {
        if (!tripCursor.data) {
          return prevCursors;
        }

        const existingCursorIndex = prevCursors.findIndex(
          (cursor) => cursor.memberId === tripCursor?.data?.memberId,
        );

        const newCursor: TripCursorData = {
          ...tripCursor.data,
          x: tripCursor.data.x * window.innerWidth,
          y: tripCursor.data.y * window.innerHeight,
        };

        if (existingCursorIndex !== -1) {
          const updatedCursors = [...prevCursors];
          updatedCursors[existingCursorIndex] = newCursor;
          return updatedCursors;
        } else {
          return [...prevCursors, newCursor];
        }
      });
    }
  }, [tripCursor, memberId]);

  useEffect(() => {
    setOtherCursors([]);
  }, [visitDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOtherCursors([]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {otherCursors.map((cursor, index) => (
        <div
          key={index}
          className="pointer-events-none absolute z-50 -translate-x-2 -translate-y-2 transform"
          style={{
            left: `${cursor.x}px`,
            top: `${cursor.y}px`,
          }}>
          <BsFillCursorFill
            size={15}
            color={cursor.color}
            className="scale-x-[-1]"
          />
          <div
            className={
              'text-bold absolute left-1 top-2 p-1 text-center text-xs'
            }
            style={{ whiteSpace: 'nowrap', color: cursor.color }}>
            {cursor.name}
          </div>
        </div>
      ))}
    </>
  );
};

export default PlanOtherCursor;
