import React, { useState, useEffect, useRef } from 'react';
import {
  format,
  getDaysInMonth,
  addMonths,
  startOfMonth,
  isWithinInterval,
  setDate,
  isSameDay,
  differenceInDays,
  addDays,
  subDays,
} from 'date-fns';
import { ko } from 'date-fns/locale';
import 'tailwindcss/tailwind.css';

const CALENDAR_LENGTH = 42;
const DAY_OF_WEEK = 7;
const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const currentDate = new Date();
  const [visibleMonths, setVisibleMonths] = useState<Date[]>([
    currentDate,
    addMonths(currentDate, 1),
    addMonths(currentDate, 2),
    addMonths(currentDate, 3),
  ]);
  const calendarRef = useRef<HTMLDivElement>(null);

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
    if (!startDate || (startDate && endDate)) {
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
      <div key={index} className="mt-4 text-center font-bold">
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

    if (isStart || isEnd) {
      dayClass = 'rounded-full bg-main2 text-white z-10';
    } else if (isMiddle) {
      dayClass = 'bg-[#DAFBFF] z-0';
      beforeClass = isSecondDayInRange(date)
        ? 'before:content-[""] before:absolute before:left-[-50%] before:top-0 before:w-1/2 before:h-full before:bg-[#DAFBFF]'
        : '';
      afterClass = isSecondLastDayInRange(date)
        ? 'after:content-[""] after:absolute after:right-[-50%] after:top-0 after:w-1/2 after:h-full after:bg-[#DAFBFF]'
        : '';
    }

    const onClick = () => handleDateClick(date);

    return (
      <div
        key={day}
        className={`relative flex h-[48px] cursor-pointer items-center justify-center p-2 ${dayClass} ${beforeClass} ${afterClass}`}
        onClick={onClick}>
        {day}
      </div>
    );
  };

  const isSecondDayInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    const nextDay = addDays(startDate, 1);
    return isSameDay(date, nextDay);
  };

  const isSecondLastDayInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    const prevDay = subDays(endDate, 1);
    return isSameDay(date, prevDay);
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
      <div className="m-4">
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
      <div className="title1 mb-7">
        {startDate && endDate
          ? `${format(startDate, 'MM. dd', { locale: ko })} - ${format(
              endDate,
              'MM. dd',
              { locale: ko },
            )} (${differenceInDays(endDate, startDate)}박 ${
              differenceInDays(endDate, startDate) + 1
            }일)`
          : '날짜를 선택해주세요.'}
      </div>

      <div ref={calendarRef} className="scrollbar-hide h-screen overflow-auto">
        {visibleMonths.map((month, idx) => (
          <div key={idx}>{renderCalendar(month)}</div>
        ))}
      </div>
    </>
  );
};

export default Calendar;
