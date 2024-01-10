import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { addDays } from 'date-fns';

export const DatePickerInfinite = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);
  return (
    <div>
      <DateRange
        // editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        direction="vertical"
        scroll={{ enabled: true }}
        ranges={state}
        minDate={new Date()}
        maxDate={addDays(new Date(), 900)}
      />
    </div>
  );
};
