import { HeartIcon } from '@components/common/icons/Icons';
import { postLikedTours, deleteLikedTours } from '@api/tours';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface DetailToursInfoProps {
  infoData: tourDetail;
}

export default function DetailToursInfo({ infoData }: DetailToursInfoProps) {
  const { title, liked, originalThumbnailUrl, id } = infoData;

  const [isLiked, setIsLiked] = useState<boolean>(liked);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: likeMutate } = useMutation({
    mutationFn: (id: number) => postLikedTours({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['details'] });
      setIsLiked(true);
    },
    onError: () => console.log('error'),
  });

  const { mutate: unlikeMutate } = useMutation({
    mutationFn: (id: number) => deleteLikedTours({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['details'] });
      setIsLiked(false);
    },
    onError: () => console.log('error'),
  });

  const onClickLikeButton = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      // 비로그인 알람창 처리 필요
      navigate('/signin');
    } else {
      if (liked === false) {
        likeMutate(id);
      } else {
        unlikeMutate(id);
      }
    }
  };

  return (
    <>
      <div className="column mt-1 flex aspect-[3/2] h-[11.938rem] w-full items-start overflow-hidden rounded-lg">
        <img
          src={originalThumbnailUrl}
          alt="tour-image"
          className="h-full w-full"
        />
      </div>
      <div className="mt-1 flex w-full items-center justify-between py-2">
        <h1 className="font-['Pretendard'] text-2xl font-bold text-black ">
          {title}
        </h1>
        <div className="top-75 h-[24px] w-[24px] cursor-pointer">
          <HeartIcon
            // 최종 = props liked 기반, 현재 임시 처리(isLiked)
            fill={isLiked ? '#FF2167' : '#D7D7D7'}
            color="none"
            onClick={onClickLikeButton}
          />
        </div>
      </div>
    </>
  );
}
