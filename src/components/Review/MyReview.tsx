import { getMemberReviews } from '@api/member';
import { StarIcon } from '@components/common/icons/Icons';
import { Modal } from '@components/common/modal';
import { isModalOpenState, modalChildrenState } from '@recoil/modal';
import {
  contentState,
  isModifyingReviewState,
  keywordsState,
  ratingState,
  targetReviewIdState,
  tourItemIdState,
  toastPopUpState,
} from '@recoil/review';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import ReviewItem from '@components/DetailSectionBottom/ReviewItem';
import ToastPopUp from '@components/common/toastpopup/ToastPopUp';
import EditDelete from '@components/common/modal/children/EditDelete';
import DeleteAlert from '@components/common/modal/children/DeleteAlert';

export default function MyReview() {
  const [reviewDataLength, setReviewDataLength] = useState<number>(0);
  const params = useParams();
  const tourItemId = Number(params.id);
  const navigate = useNavigate();
  const setRating = useSetRecoilState(ratingState);
  const setKeywords = useSetRecoilState(keywordsState);
  const setContent = useSetRecoilState(contentState);
  const setTourItemId = useSetRecoilState(tourItemIdState);
  const setTargetReviewId = useSetRecoilState(targetReviewIdState);
  const setIsModifyingReview = useSetRecoilState(isModifyingReviewState);
  const [toastPopUp, setToastPopUp] = useRecoilState(toastPopUpState);
  const modalChildren = useRecoilValue(modalChildrenState);
  const {
    data: myReviews,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ['myReviews'],
    queryFn: ({ pageParam = 0 }) => getMemberReviews(pageParam, 10),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage?.data?.data?.pageable.pageNumber;
      const totalPages = lastPage?.data?.data?.totalPages;

      if (currentPage < totalPages - 1) {
        return currentPage + 1;
      }
      return undefined;
    },
  });

  if (error) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  const handleReviewClick = (item: any) => {
    const reviewId = item.reviewId;
    navigate(`/reviewComment/${reviewId}`, { state: { item, tourItemId } });
  };

  const handlePostingReivew = () => {
    navigate(`/reviewPosting/${tourItemId}`);
  };

  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);

  const closeModal = () => {
    setTourItemId(0);
    setRating(0);
    setKeywords([]);
    setContent('');
    setTargetReviewId(0);
    setIsModifyingReview(false);
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log('myReviews', myReviews);
    {
      myReviews?.pages.map((group) => {
        setReviewDataLength(group?.data.data.totalElements);
      });
    }
  }, [myReviews]);

  useEffect(() => {
    if (toastPopUp.isPopUp) {
      const timer = setTimeout(() => {
        setToastPopUp(() => ({
          isPopUp: false,
          noun: '',
          verb: '',
        }));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [toastPopUp]);

  return (
    <>
      {toastPopUp.isPopUp && (
        <ToastPopUp noun={toastPopUp.noun} verb={toastPopUp.verb} />
      )}
      <div className="mb-4 mt-2 text-lg font-bold" id="scrollToReview">
        나의 리뷰<span className="pl-1 text-gray4">{reviewDataLength}</span>
      </div>
      {reviewDataLength == 0 && (
        <div
          className="flex cursor-pointer flex-col items-center justify-center"
          onClick={handlePostingReivew}>
          <div className="mb-2 flex">
            {Array.from({ length: 5 }, (_, index) => (
              <StarIcon key={index} size={30} color="none" fill={'#EDEDED'} />
            ))}
          </div>
          <div className="text-sm text-gray3">첫번째 리뷰를 남겨주세요!</div>
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
          {myReviews?.pages.map((group, index) => {
            {
              return (
                <React.Fragment key={index}>
                  {group?.data.data.content.map((item: any) => (
                    <ReviewItem
                      key={item.reviewId}
                      reviewId={item.reviewId}
                      authorNickname={item.authorNickname}
                      authorProfileImageUrl={item.authorProfileImageUrl}
                      rating={item.rating}
                      createdTime={item.createdTime}
                      content={item.content}
                      keywords={item.keywords}
                      commentCount={item.commentCount}
                      onClick={() => handleReviewClick(item)}
                      tourItemId={tourItemId}
                      canTextOverflow={true}
                      isAuthor={item.isAuthor}
                    />
                  ))}
                </React.Fragment>
              );
            }
          })}
        </div>
      </InfiniteScroll>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {modalChildren === 'EditDelete' && <EditDelete />}
        {modalChildren === 'DeleteAlert' && <DeleteAlert />}
      </Modal>
    </>
  );
}
