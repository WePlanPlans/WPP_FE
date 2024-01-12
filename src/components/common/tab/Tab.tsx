import * as Tabs from '@radix-ui/react-tabs';

interface TabProps {
  lists: string[];
  contents: React.ReactNode[];
}

const Tab = ({ lists, contents }: TabProps) => (
  <Tabs.Root className="flex w-full flex-col" defaultValue="tab0">
    <Tabs.List
      className="border-b-1 flex shrink-0 px-5"
      aria-label="Manage your account">
      {lists.map((list, index) => {
        return (
          <Tabs.Trigger
            key={index}
            className="headline1 flex flex-1 cursor-pointer select-none items-center justify-center border-b-2 border-solid border-gray2 py-[8px] leading-none text-gray4 outline-none data-[state=active]:border-b-2 data-[state=active]:border-solid data-[state=active]:border-black data-[state=active]:text-black"
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
          className="grow p-5 outline-none"
          value={`tab${index}`}>
          {content}
        </Tabs.Content>
      );
    })}
  </Tabs.Root>
);

export default Tab;
