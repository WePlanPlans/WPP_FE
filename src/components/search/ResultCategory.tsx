import { ButtonWhite } from '@components/common/button/Button';
import { ResultItem } from './ResultItem';

export const ResultCategory = (result: any) => {
  return (
    <>
      <h2 className="headline2 my-2.5">숙소</h2>
      <ResultItem result={result} />
      <ButtonWhite className="my-2" onClick={() => {}}>
        숙소 더 보기
      </ButtonWhite>
    </>
  );
};
