import { getToursReviews } from '@api/tours';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from '@tanstack/react-query';
import ReviewItem from './ReviewItem';
import { StarIcon } from '@components/common/icons/Icons';
import { useNavigate, useParams } from 'react-router-dom';

interface reviewProps {
  reviewData: any;
}

export default function DetailReviews({ reviewData }: reviewProps) {
  const [reviewDataLength, setReviewDataLength] = useState<number>(0);
  const { title, contentTypeId } = reviewData;
  const params = useParams();
  const tourItemId = Number(params.id);
  const navigate = useNavigate();

  const {
    data: toursReviews,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['toursReviews'],
    queryFn: ({ pageParam }) => getToursReviews(tourItemId),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const lastData = lastPage?.data?.data?.reviewInfos;
      return lastData && lastData.length === 4 ? lastPageParam + 1 : undefined;
    },
  });

  const handleReviewClick = (item: any) => {
    const reviewId = item.reviewId;
    navigate(`/reviewComment/${reviewId}`, { state: { item } });
  };

  const handlePostingReivew = () => {
    navigate(`/reviewPosting/${tourItemId}`, {
      state: { title, contentTypeId },
    });
  };

  useEffect(() => {
    setReviewDataLength(toursReviews?.pages[0].data.data.reviewTotalCount);
  }, [toursReviews]);

  // useEffect(() => {
  //   console.log(
  //     'toursReviews.pages[0].data.data.reviewTotalCount',
  //     toursReviews?.pages[0].data.data.reviewTotalCount,
  //   );
  //   console.log('toursReviews', toursReviews);
  // }, [toursReviews]);
  return (
    <>
      <div className="mb-4 mt-2 text-lg font-bold">
        리뷰 <span className="text-gray3">{reviewDataLength}</span>
      </div>
      {reviewDataLength > 0 && (
        <InfiniteScroll
          hasMore={hasNextPage}
          loadMore={() => fetchNextPage()}
          initialLoad={false}>
          {toursReviews?.pages?.map((page, pageIndex) => (
            <div key={pageIndex}>
              {page?.data?.data?.reviewInfos?.content?.map(
                (item: any, index: number) => (
                  <ReviewItem
                    key={item.reviewId}
                    authorNickname={item.authorNickname}
                    authorProfileImageUrl={item.authorProfileImageUrl}
                    rating={item.rating}
                    createdTime={item.createdTime}
                    content={item.content}
                    keywords={item.keywords} // keywordId, content, type
                    commentCount={2} //commentCount가 swagger에는 있는데 response에는 없음
                    onClick={() => handleReviewClick(item)}
                  />
                ),
              )}
            </div>
          ))}
        </InfiniteScroll>
      )}
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
    </>
  );
}
