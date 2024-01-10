import { format, addDays } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useState } from 'react';
import { DateFormatter, DayPicker, DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';

const formatCaption: DateFormatter = (date, options) => {
  const y = date.getFullYear();
  const m = format(date, 'LLLL', { locale: options?.locale });
  return `${y} ${m} `;
};

export const DatePicker = () => {
  const today = new Date();
  const defaultSelected: DateRange = {
    from: today,
    to: addDays(today, 4),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <DatePickerSection>
      <div className="header title3 mb-6">
        {range?.from ? (
          !range.to ? (
            <p>{format(range.from, 'PPP', { locale: ko })}</p>
          ) : (
            <p>
              {format(range.from, 'PP', { locale: ko })} –{' '}
              {format(range.to, 'PP', { locale: ko })}
            </p>
          )
        ) : (
          <p>날짜를 선택하세요.</p>
        )}
      </div>
      <DayPicker
        id="dateRangePicker"
        numberOfMonths={2}
        mode="range"
        locale={ko}
        formatters={{ formatCaption }}
        selected={range}
        onSelect={setRange}
        captionLayout="dropdown"
        fromYear={2024}
        toYear={2030}
      />
    </DatePickerSection>
  );
};

const DatePickerSection = styled.section`
  .rdp {
    --rdp-cell-size: 40px;
    --rdp-caption-font-size: 14px;
    --rdp-accent-color: #0000ff;
    --rdp-background-color: #fff;
    --rdp-accent-color-dark: #3003e1;
    --rdp-background-color-dark: #180270;
    --rdp-outline: none;
    --rdp-outline-selected: none;
    --rdp-selected-color: #fff;
    margin: 0;
  }
  .rdp-months {
    flex-direction: column;
    width: 100%;
  }
  .rdp-month {
    margin: 0;
    width: 100%;
  }

  .rdp-caption,
  select.rdp-dropdown {
    text-align: left;
  }

  .rdp-caption_label {
    font-size: 15px;
  }

  .rdp-caption_start {
    margin-bottom: 30px;
  }

  .rdp-table {
    max-width: 100%;
    width: 100%;
  }

  .rdp-row {
    /* display: flex; */
    width: 100%;
  }

  .rdp-day_selected {
    background-color: #ddd;
  }

  .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    background-color: #eee;
  }
`;
