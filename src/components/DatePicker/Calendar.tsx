import React, { useEffect, useRef, useState } from 'react';
import {
  addMonths,
  differenceInDays,
  format,
  getDaysInMonth,
  isSameDay,
  isWithinInterval,
  startOfMonth,
} from 'date-fns';
import { ko } from 'date-fns/locale';
import 'tailwindcss/tailwind.css';

const CALENDAR_LENGTH = 42;
const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar: React.FC<{
  onDateSelect: (startDate: Date | null, endDate: Date | null) => void;
}> = ({ onDateSelect }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    onDateSelect(startDate, endDate);
  }, [startDate, endDate, onDateSelect]);

  const currentDate = new Date();
  const [visibleMonths, setVisibleMonths] = useState<Date[]>([
    currentDate,
    addMonths(currentDate, 1),
    addMonths(currentDate, 2),
    addMonths(currentDate, 3),
  ]);
  const calendarRef = useRef<HTMLDivElement>(null);

  // 날짜 변경될 때 콜백함수
  useEffect(() => {
    onDateSelect(startDate, endDate);
  }, [startDate, endDate, onDateSelect]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = calendarRef.current!;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setVisibleMonths((prev) => [
        ...prev,
        addMonths(prev[prev.length - 1], 1),
      ]);
    }
  };

  const handleDateClick = (date: Date) => {
    if (startDate && !endDate && date < startDate) {
      setEndDate(startDate);
      setStartDate(date);
    } else if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date > startDate) {
      setEndDate(date);
    }
  };

  const isDateInRange = (date: Date) => {
    return (
      startDate &&
      endDate &&
      isWithinInterval(date, { start: startDate, end: endDate })
    );
  };

  useEffect(() => {
    const ref = calendarRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
      return () => ref.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const renderDayLabels = () => {
    return DAY_LIST.map((dayLabel, index) => (
      <div
        key={index}
        className="flex h-[48px] items-center justify-center text-center">
        {dayLabel}
      </div>
    ));
  };

  const renderDay = (day: number, monthDate: Date) => {
    const date = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
    const inRange = isDateInRange(date);
    const isStart = startDate && isSameDay(date, startDate);
    const isEnd = endDate && isSameDay(date, endDate);
    const isMiddle = inRange && !isStart && !isEnd;

    let dayClass = '';
    let beforeClass = '';
    let afterClass = '';

    if (isStart) {
      dayClass = 'rounded-full size-[40px] bg-main2 text-white z-10';
      afterClass = endDate
        ? 'after:content-[""] after:absolute after:left-[50%] after:top-[4px] after:w-[32px] after:h-[40px] after:bg-[#DAFBFF] after:z-[1]'
        : '';
    } else if (isEnd) {
      dayClass = 'rounded-full w-[40px] bg-main2 text-white z-10';
      beforeClass =
        'before:content-[""] before:absolute before:right-[50%] before:top-[4px] before:w-[32px] before:h-[40px] before:bg-[#DAFBFF] before:z-[1]';
    } else if (isMiddle) {
      dayClass = 'bg-[#DAFBFF]  w-full';
    }

    const onClick = () => handleDateClick(date);

    return (
      <div
        key={day}
        className={`relative flex h-[48px] cursor-pointer items-center justify-center ${beforeClass} ${afterClass}`}
        onClick={onClick}>
        <div
          className={`flex h-[40px] items-center justify-center ${dayClass}`}>
          {day}
        </div>
      </div>
    );
  };

  const renderCalendar = (monthDate: Date) => {
    const totalMonthDays = getDaysInMonth(monthDate);
    const startDay = startOfMonth(monthDate).getDay();

    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`prev${i}`} className="p-2 text-center"></div>);
    }

    for (let day = 1; day <= totalMonthDays; day++) {
      days.push(renderDay(day, monthDate));
    }

    while (days.length < CALENDAR_LENGTH) {
      days.push(
        <div key={`next${days.length}`} className="p-2 text-center"></div>,
      );
    }

    return (
      <div className="mb-4">
        <div className="headline1 text-left">
          {format(monthDate, 'yyyy년 MM월', { locale: ko })}
        </div>
        <div className="grid grid-cols-7">
          {renderDayLabels()}
          {days}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="title2 mb-7">
        {startDate && !endDate
          ? `${format(startDate, 'MM.dd', { locale: ko })}`
          : startDate && endDate
            ? `${format(startDate, 'MM.dd', { locale: ko })} - ${format(
                endDate,
                'MM.dd',
                { locale: ko },
              )} (${differenceInDays(endDate, startDate)}박 ${
                differenceInDays(endDate, startDate) + 1
              }일)`
            : '날짜를 선택해주세요.'}
      </div>

      <div ref={calendarRef} className="flex-1 overflow-auto scrollbar-hide">
        {visibleMonths.map((month, idx) => (
          <div key={idx}>{renderCalendar(month)}</div>
        ))}
      </div>
    </>
  );
};

export default Calendar;
