import * as accordion from '@radix-ui/react-accordion';

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
  value: string;
  openAccordion: string;
  setOpenAccordion: (value: string) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  value,
  openAccordion,
  setOpenAccordion,
}) => {
  return (
    <accordion.Root
      type="single"
      collapsible
      value={openAccordion}
      onValueChange={setOpenAccordion}>
      <accordion.Item value={value}>
        <accordion.Trigger>
          <accordion.Header className="flex">{title}</accordion.Header>
        </accordion.Trigger>

        <accordion.Content>{content}</accordion.Content>
      </accordion.Item>
    </accordion.Root>
  );
};

export default Accordion;
