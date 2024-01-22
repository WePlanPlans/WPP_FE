import React, { useState, useEffect } from 'react';
import { ReactComponent as CircleCheckIcon } from '@assets/images/CircleCheck.svg';

interface ToastPopUpProps {
  noun: string;
  verb: string;
}

const ToastPopUp: React.FC<ToastPopUpProps> = ({ noun, verb }) => {
  const [particle, setParticle] = useState('가');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setVisible(true);
      }, 500);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (noun === '일정' || noun === '날짜 이동' || noun === '여행 일정') {
      setParticle('이');
    }
  }, [noun]);

  return (
    <div
      className={`fixed flex items-center px-4 `}
      style={{
        top: '0',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: visible ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
        width: '335px', // 375 - 40(20 20)(패딩)
        height: '64px',
        borderRadius: '1rem',
        border: '1px solid #29DDF6',
        backgroundColor: '#F2FDFF',
        color: '#062139',
        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
        opacity: visible ? 1 : 0,
        zIndex: 1, // 이거 해줘야 kakao-map도 dimmed됨
        marginTop: '56px',
      }}>
      <CircleCheckIcon fill="#29DDF6" className="mr-2" />
      <p>
        {noun}
        {particle} {verb}되었습니다.
      </p>
    </div>
  );
};

export default ToastPopUp;
