import { useNavigate } from 'react-router-dom';
import { HeartIcon } from '../icons/Icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteLikedTours, postLikedTours } from '@api/tours';

import Alert from '../alert/Alert';
import { useState } from 'react';

const Like = ({ liked, id }: LikeProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const { mutate: likeMutate } = useMutation({
    mutationFn: (id: number) => postLikedTours({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['details'] });
      queryClient.invalidateQueries({ queryKey: ['tours'] });
      queryClient.invalidateQueries({ queryKey: ['wishList'] });
    },
    onError: () => console.log('error'),
  });

  const { mutate: unlikeMutate } = useMutation({
    mutationFn: (id: number) => deleteLikedTours({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['details'] });
      queryClient.invalidateQueries({ queryKey: ['tours'] });
      queryClient.invalidateQueries({ queryKey: ['wishList'] });
    },
    onError: () => console.log('error'),
  });

  const onClickLikeButton = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
      if (liked === false) {
        likeMutate(id);
      } else {
        unlikeMutate(id);
      }
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleConfirm = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    navigate('/login');
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <div
            onClick={onClickLikeButton}
            className="top-75 h-[24px] w-[24px] cursor-pointer">
            <HeartIcon
              fill={liked ? '#FF2167' : '#D7D7D7'}
              color={liked ? '#ff2167' : '#ffffff'}
            />
          </div>
        </>
      ) : (
        <>
          <Alert
            title={'로그인'}
            message={
              <>
                관심 목록 등록시 로그인이 필요합니다.
                <br />
                로그인 하시겠습니까?
              </>
            }
            onConfirm={handleConfirm}
            onCancel={handleCancel}>
            <div
              onClick={onClickLikeButton}
              className="top-75 h-[24px] w-[24px] cursor-pointer">
              <HeartIcon
                fill={liked ? '#FF2167' : '#D7D7D7'}
                color={liked ? '#ff2167' : '#ffffff'}
              />
            </div>
          </Alert>
        </>
      )}
    </>
  );
};

export default Like;
