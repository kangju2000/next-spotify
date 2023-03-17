import { css } from '@emotion/react';
import Category from 'components/common/Category/Category';
import TargetDiv from 'components/common/TargetDiv';
import { useGetCategories } from 'hooks/queries/browse';

const CategoriesPage = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetCategories();

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
      <TargetDiv
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  );
};

export default CategoriesPage;
