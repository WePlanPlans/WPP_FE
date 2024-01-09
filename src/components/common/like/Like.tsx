import { useNavigate } from 'react-router-dom';
import { HeartIcon } from '../icons/Icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteLikedTours, postLikedTours } from '@api/tours';

const Like = ({ liked, id }: LikeProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

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
    <div
      onClick={onClickLikeButton}
      className="top-75 h-[24px] w-[24px] cursor-pointer">
      <HeartIcon
        fill={liked ? '#FF2167' : '#D7D7D7'}
        color={liked ? '#ff2167' : '#ffffff'}
      />
    </div>
  );
};

export default Like;
