import * as RadioGroup from '@radix-ui/react-radio-group';
import { useState } from 'react';

interface RadioSelectProps {
  items: (string | number)[] | Record<string, string | number>;
  ariaLabel: string;
  onSelectionChange: (selectedValue: string | number) => void;
  gridCols?: number;
}

type gridColumnsType = {
  [key: number]: string;
};

const gridColumns: gridColumnsType = {
  2: 'grid grid-cols-2',
  3: 'grid grid-cols-3',
  4: 'grid grid-cols-4',
};

export const RadioSelect: React.FC<RadioSelectProps> = ({
  items,
  ariaLabel,
  onSelectionChange,
  gridCols = 2,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | number | null>(
    null,
  );

  console.log('selected Radio value:', selectedValue);

  const handleRadioChange = (value: string | number) => {
    setSelectedValue(value);
    onSelectionChange(value);
  };

  const gridClassName = gridColumns[gridCols] || gridColumns[2];
  return (
    <>
      <form>
        <RadioGroup.Root
          className={`RadioGroupRoot grid w-full gap-x-4 ${gridClassName}`}
          onValueChange={handleRadioChange}
          aria-label={ariaLabel}>
          {Array.isArray(items)
            ? items.map((value) => (
                <div key={value}>
                  <RadioGroup.Item
                    className="RadioGroupItem"
                    value={value as string}
                    id={`r${value}`}>
                    <RadioGroup.Indicator className="RadioGroupIndicator absolute" />
                  </RadioGroup.Item>
                  <label
                    className={`Label block flex h-10 w-full cursor-pointer items-center justify-center rounded-lg bg-gray1 transition-colors ${
                      selectedValue === value ? 'bg-gray3' : ''
                    }`}
                    htmlFor={`r${value}`}>
                    {String(value)}
                  </label>
                </div>
              ))
            : Object.entries(items).map(([label, value]) => (
                <div key={String(value)}>
                  <RadioGroup.Item
                    className="RadioGroupItem"
                    value={String(value)}
                    id={`r${value}`}>
                    <RadioGroup.Indicator className="RadioGroupIndicator absolute" />
                  </RadioGroup.Item>
                  <label
                    className={`Label block flex h-10 w-full cursor-pointer items-center justify-center rounded-lg bg-gray1 transition-colors ${
                      selectedValue === String(value) ? 'bg-gray3' : ''
                    }`}
                    htmlFor={`r${value}`}>
                    {label}
                  </label>
                </div>
              ))}
        </RadioGroup.Root>
      </form>
    </>
  );
};
