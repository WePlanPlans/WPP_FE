import { useEffect, useState } from 'react';
import { TopIcon } from '@components/common/icons/Icons';

export default function DetailTopButton() {
  const [showButton, setShowButton] = useState(true);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);

    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <div
        onClick={scrollToTop}
        className="scroll__container sticky bottom-3 z-20 flex cursor-pointer items-center justify-end">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
          <TopIcon />
        </div>
      </div>
    )
  );
}
