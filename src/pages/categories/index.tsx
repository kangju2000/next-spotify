import { css } from '@emotion/react';
import { RotatingLines } from 'react-loader-spinner';
import Category from 'components/common/Category/Category';
import { useGetCategories } from 'hooks/queries/browse';
import useIntersect from 'hooks/useIntersect';

const CategoriesPage = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetCategories();

  const targetRef = useIntersect<HTMLDivElement>((entry, observer) => {
    if (!hasNextPage) return;

    fetchNextPage();

    observer.unobserve(entry.target);
  }, 0.7);

  return (
    <>
      <div
        css={css`
          display: flex;
          margin-left: 30px;
          flex-wrap: wrap;
          gap: 30px;
        `}
      >
        {data?.pages?.map((page) =>
          page.data.categories.items.map((category: SpotifyApi.CategoryObject) => (
            <Category key={category.id} category={category} />
          ))
        )}
      </div>
      <div
        ref={targetRef}
        css={css`
          height: 200px;
        `}
      />
      {isFetchingNextPage && (
        <div
          css={css`
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 999;
          `}
        >
          <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="48"
            visible={true}
          />
        </div>
      )}
    </>
  );
};

export default CategoriesPage;
