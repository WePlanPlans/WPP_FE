import { useEffect, useRef, useState } from 'react';
import { TopIcon } from '@components/common/icons/Icons';

export default function DetailTopButton({ parentRef }: any) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [viewportHeight, setViewportHeight] = useState<number>(0);

  const scrollButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollButtonRef.current && parentRef.current) {
        setViewportHeight(screen.height);

        // 부모 요소의 높이보다 적을 때까지 스크롤 허용
        if (window.scrollY < parentRef.current.clientHeight - 50) {
          // 기기 높이의 절반 이상 스크롤 했을 때
          if (window.scrollY >= viewportHeight / 2) {
            setIsVisible(true);
            setScrollPosition(window.scrollY);
          } else {
            setIsVisible(false);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [parentRef, scrollPosition, setScrollPosition]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      ref={scrollButtonRef}
      className={`absolute right-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
      style={{ top: `${scrollPosition}px` }}>
      <TopIcon />
    </div>
  );
}
