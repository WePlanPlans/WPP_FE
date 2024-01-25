import { useEffect, useState, useContext, RefObject } from 'react';
import { BsFillCursorFill } from 'react-icons/bs';
import { pubCursor } from '@api/socket';
import { socketContext } from '@hooks/useSocket';
import { useGetTripsAuthority } from '@hooks/useGetTripsAuthority';
import { useRecoilValue } from 'recoil';
import { visitDateState } from '@recoil/socket';

type PlanCursorProps = {
  props: RefObject<HTMLDivElement>;
};

const PlanCursor = ({ props }: PlanCursorProps) => {
  const visitDate = useRecoilValue(visitDateState);
  const token = localStorage.getItem('accessToken');
  const { memberId } = useGetTripsAuthority();
  const { tripId, tripMember } = useContext(socketContext);
  const [position, setPosition] = useState({ myX: 0, myY: 0 });

  const myName = tripMember?.data?.tripMembers.find(
    (member) => member.memberId === memberId,
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const myX = e.clientX;
      const myY = e.clientY;
      setPosition({ myX, myY });

      const x = (e.clientX + window.scrollX) / window.innerWidth;
      const y = (e.clientY + window.scrollY) / window.innerHeight;

      if (token && myName && visitDate && tripId) {
        pubCursor(
          {
            token: token,
            visitDate: visitDate.visitDate,
            x,
            y,
          },
          tripId,
        );
      }
    };

    const handleMouseEnter = () => {
      cursorStyle('none');
    };

    const handleMouseLeave = () => {
      cursorStyle('auto');
    };

    const cursorArea = props.current;

    const cursorStyle = (style: string): void => {
      document.querySelectorAll('*').forEach((el) => {
        const element = el as HTMLElement;
        element.style.cursor = style;
      });
    };

    if (cursorArea) {
      cursorArea.addEventListener('mousemove', handleMouseMove);
      cursorArea.addEventListener('mouseenter', handleMouseEnter);
      cursorArea.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (cursorArea) {
        cursorStyle('auto');
        cursorArea.removeEventListener('mousemove', handleMouseMove);
        cursorArea.removeEventListener('mouseenter', handleMouseEnter);
        cursorArea.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [token, myName, visitDate, tripId]);

  const getColorByMemberId = (memberId: number | null) => {
    if (memberId == null) {
      return 'black';
    }

    const colors = ['#FF2167', '#7932FF', '#29DDF6', '#FFAC16', '#16E7A9'];
    const remainder = memberId % 5;
    return colors[remainder];
  };

  return (
    <div
      className="pointer-events-none fixed z-50 w-full -translate-x-2 -translate-y-2 transform"
      style={{ left: `${position.myX}px`, top: `${position.myY}px` }}>
      <BsFillCursorFill
        size={15}
        color={getColorByMemberId(memberId)}
        className="scale-x-[-1]"
      />
      <div
        className="text-bold absolute left-1 top-2 p-1 text-center text-xs"
        style={{ color: getColorByMemberId(memberId) }}>
        {myName?.name}
      </div>
    </div>
  );
};

export default PlanCursor;
