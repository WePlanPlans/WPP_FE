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

const PlanCursor = ({ date }: PlanCursorProps) => {
  const token = localStorage.getItem('accessToken');
  const { memberId } = useGetTripsAuthority();
  const { callBackPub, tripId, tripMember } = useContext(socketContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const myName = tripMember?.data?.tripMembers.find(
    (member) => member.memberId === memberId,
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const cursorStyle = (style: string): void => {
      document.querySelectorAll('*').forEach((el) => {
        const element = el as HTMLElement;
        element.style.cursor = style;
      });
    };
    cursorStyle('none');
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      cursorStyle('auto');
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // useEffect(() => {
  //   if (token && position && myName && date && tripId) {
  //     const timeoutId = setTimeout(() => {
  //       callBackPub(() =>
  //         pubCursor(
  //           {
  //             token: token,
  //             visitDate: date,
  //             x: position.x,
  //             y: position.y,
  //           },
  //           tripId,
  //         ),
  //       );
  //     }, 1000);

  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [position]);

  useEffect(() => {
    if (token && position && myName && date && tripId) {
      callBackPub(() =>
        pubCursor(
          {
            token: token,
            visitDate: date,
            x: position.x,
            y: position.y,
          },
          tripId,
        ),
      );
    }
  }, [position]);

  return (
    <div
      className="pointer-events-none fixed z-50 w-full -translate-x-2 -translate-y-2 transform"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      <BsFillCursorFill size={15} color="blue" className="scale-x-[-1]" />
      <div className="text-bold text-blue absolute left-1 top-2 p-1 text-center text-xs">
        {myName?.name}
      </div>
    </div>
  );
};

export default PlanCursor;
