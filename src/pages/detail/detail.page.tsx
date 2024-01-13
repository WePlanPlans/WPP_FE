import { DetailHeader } from '@components/common/header';
import DetailSectionTop from '@components/DetailSectionTop/DetailSectionTop';
import DetailSectionBottom from '@components/DetailSectionBottom/DetailSectionBottom';
import { DetailTopButton } from '@components/DetailSectionTop';
import { useRef } from 'react';

const DetailTours = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <DetailHeader />
      <DetailSectionTop />
      <div className="relative" ref={parentRef}>
        <DetailSectionBottom />
        <DetailTopButton parentRef={parentRef} />
      </div>
    </div>
  );
};

export default DetailTours;
