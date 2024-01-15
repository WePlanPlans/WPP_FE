import { useNavigate } from 'react-router-dom';

const CreateMyTripButton = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/create')}
      className="sticky bottom-20 z-[100] ml-auto mr-2 flex h-12 w-[119px] items-center justify-center gap-2 rounded-[30px] bg-[#28d8ff] p-2 shadow-[2px_2px_5px_0_rgba(0,0,0,0.2)]">
      <button className="headline1 pt-[2px] text-white">여행 계획하기</button>
    </div>
  );
};

export default CreateMyTripButton;
