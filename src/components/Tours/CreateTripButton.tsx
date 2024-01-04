import { PlusIcon } from '@components/common/icons/Icons';

const CreateTripButton = () => {
  return (
    <div className="sticky bottom-20 z-[100] ml-auto mr-[10px] h-[51px] w-[51px] cursor-pointer">
      <PlusIcon size={51} color="white" />
    </div>
  );
};

export default CreateTripButton;
