import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { reviewCountState } from '@recoil/review';
import { TopIcon } from '@components/common/icons/Icons';

export default function DetailTopButton() {
  const [visible, setVisible] = useState<boolean>(false);
  const getReviewCount = useRecoilValue(reviewCountState);

  useEffect(() => {
    if (getReviewCount > 2) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [getReviewCount]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="sticky bottom-5
      mt-[-50px] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-md"
      style={{ left: 'calc(100%)' }}>
      <button onClick={scrollToTop}>
        <TopIcon />
      </button>
    </div>
  );
}
