import * as ToggleGroup from '@radix-ui/react-toggle-group';

export const ToggleValue = ({
  values,
  onToggle,
}: {
  values: string[];
  onToggle: (value: string) => void;
}) => {
  return (
    <ToggleGroup.Root
      className="ToggleGroup grid w-full grid-cols-2 gap-4"
      type="single"
      // defaultValue={values[0]}
      aria-label="Toggle values">
      {values.map((value) => (
        <ToggleGroup.Item
          key={value}
          className="ToggleGroupItem block flex h-10 w-full cursor-pointer items-center justify-center rounded-lg border border-solid border-gray2 bg-white transition-colors data-[state=on]:border-black"
          value={value}
          aria-label={value}
          onClick={() => onToggle(value)}>
          {value}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
};
