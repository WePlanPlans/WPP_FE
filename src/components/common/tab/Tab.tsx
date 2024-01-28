import * as Tabs from '@radix-ui/react-tabs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isFirstLoadState, tapState } from '@recoil/plan';
import { useEffect } from 'react';

interface TabProps {
  lists: string[];
  contents: React.ReactNode[];
}

const Tab = ({ lists, contents }: TabProps) => {
  const [tap, setTapState] = useRecoilState(tapState);
  const isFirstLoad = useRecoilValue(isFirstLoadState);
  const handleTabChange = (value: string) => {
    const tabIndex = value.replace('tab', '');
    setTapState(tabIndex);
  };

  useEffect(() => {
    setTapState(tap);
    if (isFirstLoad) {
      setTapState('0');
    }
  }, [tap]);

  let isDayTab = false;
  let isParticipationTab = false;

  lists.forEach((list) => {
    if (list.includes('DAY')) {
      isDayTab = true;
    }
    if (list.includes('참여')) {
      isParticipationTab = true;
    }
  });

  return (
    <Tabs.Root
      className="flex w-full flex-col"
      defaultValue={tap ? `tab${tap}` : 'tab0'}
      onValueChange={handleTabChange}>
      <Tabs.List
        className={`${
          isParticipationTab
            ? 'gap-[8px]'
            : !isDayTab && 'justify-center gap-[14.39px]'
        } border-b-1 no-scrollbar flex shrink-0 overflow-x-scroll`}
        aria-label="Manage your account">
        {lists.map((list, index) => {
          return (
            <Tabs.Trigger
              key={index}
              className={`${
                isParticipationTab
                  ? 'headline2 w-[54px]'
                  : isDayTab
                    ? 'caption1'
                    : 'headline1 w-[136px]'
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
