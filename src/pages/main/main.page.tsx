import { A, B } from '@components/abc';
import { ButtonPrimary, ButtonWhite } from '@components/common/button/Button';
import { C } from '@components/def';

const Main = () => {
  return (
    <div className="p-5">
      <ButtonWhite onClick={() => {}}>더보기</ButtonWhite>
      <ButtonPrimary onClick={() => {}}>완료</ButtonPrimary>
    </div>
  );
};

export default Main;
