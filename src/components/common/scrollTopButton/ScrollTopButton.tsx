import { TopIcon } from '@components/common/icons/Icons';
import { useEffect, useState } from 'react';

const ScrollTopButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const checkScrollTop = () => {
    if (!visible && window.scrollY > 300) {
      setVisible(true);
    } else if (visible && window.scrollY <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [visible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      className="sticky bottom-[20px]
      mt-[-50px] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-md"
      style={{ left: 'calc(100%)' }}
      onClick={scrollToTop}>
      <TopIcon />
    </button>
  );
};

export default ScrollTopButton;
