import { getMemberReviews } from '@api/member';
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
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import ReviewItem from '@components/DetailSectionBottom/ReviewItem';
import ToastPopUp from '@components/common/toastpopup/ToastPopUp';
import EditDelete from '@components/common/modal/children/EditDelete';
import MyAlert from '@components/common/modal/children/MyAlert';
import { alertTypeState } from '@recoil/modal';
import { PenIcon } from '@components/common/icons/Icons';
import ScrollTopButton from '@components/Plan/ScrollTopButton';
import { MyReviewContent } from '@/@types/review.types';

export default function MyReview() {
  const [reviewDataLength, setReviewDataLength] = useState<number>(0);
  const navigate = useNavigate();
  const setRating = useSetRecoilState(ratingState);
  const setKeywords = useSetRecoilState(keywordsState);
  const setContent = useSetRecoilState(contentState);
  const setTourItemId = useSetRecoilState(tourItemIdState);
  const setTargetReviewId = useSetRecoilState(targetReviewIdState);
  const setIsModifyingReview = useSetRecoilState(isModifyingReviewState);
  const [toastPopUp, setToastPopUp] = useRecoilState(toastPopUpState);
  const modalChildren = useRecoilValue(modalChildrenState);
  const [alertType] = useRecoilValue(alertTypeState);

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

  const handleReviewClick = (item: MyReviewContent) => {
    const reviewId = item.reviewId;
    navigate(`/reviewComment/${reviewId}`, { state: { item } });
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
        <div className="flex h-[500px] flex-col items-center justify-center">
          <div className="mb-2 flex justify-center">
            <PenIcon size={50} color="#D7D7D7" />
          </div>
          <div className="text-md mb-2 flex justify-center font-bold text-gray4">
            작성한 리뷰가 없습니다
          </div>
          <div className="flex justify-center text-sm text-gray4">
            다녀온 여행지의 리뷰를 남겨보세요!
          </div>
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
                  {group?.data.data.content.map((item: MyReviewContent) => {
                    item.isAuthor = true;
                    return (
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
                        canTextOverflow={true}
                      />
                    );
                  })}
                </React.Fragment>
              );
            }
          })}
        </div>
      </InfiniteScroll>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {modalChildren === 'EditDelete' && <EditDelete />}
        {modalChildren === 'MyAlert' && alertType === 'DeleteReview' && (
          <MyAlert title="리뷰 삭제" content="리뷰를 삭제할까요?" />
        )}
      </Modal>
      <ScrollTopButton />
    </>
  );
}
