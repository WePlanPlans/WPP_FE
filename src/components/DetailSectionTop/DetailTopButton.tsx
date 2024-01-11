import { useEffect, useState } from 'react';
import { TopIcon } from '@components/common/icons/Icons';

export default function DetailTopButton() {
  const [showButton, setShowButton] = useState(true);

  const scrollToTop = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
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

  const shadowStyle = {
    boxShadow:
      '2px 2px 5px rgba(0, 0, 0, 0.4), -2px -2px 5px rgba(0, 0, 0, 0.1)',
  };

  return (
    showButton && (
      <div
        onClick={(e) => {
          scrollToTop(e);
        }}
        className="sticky bottom-3 z-20  ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-white "
        style={shadowStyle}>
        <TopIcon />
      </div>
    )
  );
}
