import * as Tabs from '@radix-ui/react-tabs';
import { useRecoilState } from 'recoil';
import { tapState } from '@recoil/plan';

interface TabProps {
  lists: string[];
  contents: React.ReactNode[];
}

const Tab = ({ lists, contents }: TabProps) => {
  const [, setTapState] = useRecoilState(tapState);

  const handleTabChange = (value: string) => {
    const tabIndex = value.replace('tab', '');
    setTapState(tabIndex);
  };

  let isDayTab = false;

  lists.forEach((list) => {
    if (list.includes('DAY')) {
      isDayTab = true;
    }
  });

  return (
    <Tabs.Root
      className="flex w-full flex-col"
      defaultValue="tab0"
      onValueChange={handleTabChange}>
      <Tabs.List
        className="border-b-1 no-scrollbar flex shrink-0"
        aria-label="Manage your account">
        {lists.map((list, index) => {
          return (
            <Tabs.Trigger
              key={index}
              className={`${
                isDayTab ? 'caption1' : 'headline1 flex-1'
              } flex min-w-[57px] cursor-pointer select-none items-center justify-center border-b-2 border-solid border-gray2 py-[8px] leading-none text-gray4 outline-none data-[state=active]:border-b-2 data-[state=active]:border-solid data-[state=active]:border-black data-[state=active]:text-black`}
              value={`tab${index}`}>
              {list}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
      {contents.map((content, index) => {
        return (
          <Tabs.Content
            key={index}
            className="grow outline-none"
            value={`tab${index}`}>
            {content}
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};

export default Tab;
