import { getReviewComments } from '@api/review';
import { Modal } from '@components/common/modal';
import { isModalOpenState, modalChildrenState } from '@recoil/modal';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import CommentItem from './CommentItem';
// import { targetCommentIdState } from '@recoil/review';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import EditDelete from '@components/common/modal/children/EditDelete';
import MyAlert from '@components/common/modal/children/MyAlert';
import { commentState } from '@recoil/review';
import { alertTypeState } from '@recoil/modal';

export default function ReviewComments() {
  const params = useParams();
  const reviewId = Number(params.id);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  // const setTitle = useSetRecoilState(titleState);
  // const setTargetCommentId = useSetRecoilState(targetCommentIdState);
  const [commentDataLength, setCommentDataLength] = useState<number>(0);
  const modalChildren = useRecoilValue(modalChildrenState);
  const setComment = useSetRecoilState(commentState);
  const alertType = useRecoilValue(alertTypeState);

  const {
    data: reviewComments,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ['reviewComments'],
    queryFn: ({ pageParam = 0 }) => getReviewComments(reviewId, pageParam, 10),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage?.data?.data?.comments.pageable.pageNumber;
      const totalPages = lastPage?.data?.data?.comments.totalPages;

      if (currentPage < totalPages - 1) {
        return currentPage + 1;
      }
      return undefined;
    },
  });
  if (error) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  const closeModal = () => {
    setComment('');
    setIsModalOpen(false);
  };

  useEffect(() => {
    {
      reviewComments?.pages.map((group) => {
        setCommentDataLength(group?.data.data.comments.totalElements);
      });
    }
    console.log('reviewComments', reviewComments);
  }, [reviewComments]);

  return (
    <>
      <div className="mb-4 text-xs">
        댓글
        <span className="pl-0.5 font-bold">{commentDataLength}</span>
      </div>
      <div className="flex flex-col">
        {commentDataLength == 0 && (
          <div className="mb-4 flex flex-col items-center justify-center text-sm text-gray4">
            <div>댓글이 없습니다. </div>
            <div>첫 댓글을 작성해보세요!</div>
          </div>
        )}
        <InfiniteScroll
          pageStart={0}
          loadMore={() => fetchNextPage()}
          hasMore={hasNextPage}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }>
          <div>
            {reviewComments?.pages.map((group, index) => {
              {
                return (
                  <React.Fragment key={index}>
                    {group?.data.data.comments.content.map((item: any) => (
                      <CommentItem
                        key={item.commentId}
                        commentId={item.commentId}
                        authorNickname={item.authorNickname}
                        authorProfileImageUrl={item.authorProfileImageUrl}
                        createdTime={item.createdTime}
                        content={item.content}
                        isAuthor={item.isAuthor}
                      />
                    ))}
                  </React.Fragment>
                );
              }
            })}
          </div>
        </InfiniteScroll>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {modalChildren === 'EditDelete' && <EditDelete />}
        {modalChildren === 'MyAlert' && alertType === 'DeleteReview' && (
          <MyAlert title="리뷰 삭제" content="리뷰를 삭제할까요?" />
        )}
        {modalChildren === 'MyAlert' && alertType === 'LoginComment' && (
          <MyAlert
            title="로그인"
            content="댓글 쓰기 시 로그인이 필요해요. 로그인하시겠어요?"
          />
        )}
      </Modal>
    </>
  );
}
