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
            className="headline1 flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center bg-white px-5 leading-none outline-none data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current"
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
          className="grow bg-white p-5 outline-none"
          value={`tab${index}`}>
          {content}
        </Tabs.Content>
      );
    })}
  </Tabs.Root>
);

export default Tab;
