import { css } from '@emotion/react';
import { getCategories } from 'api/browse';
import Category from 'components/common/Category/Category';
import useIntersect from 'hooks/useIntersect';
import { RotatingLines } from 'react-loader-spinner';
import { useInfiniteQuery } from 'react-query';
import * as S from './styles';

const CategoresPage = () => {
  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'categories',
    getCategories,
    {
      getNextPageParam: (lastPage) => {
        console.log(lastPage);
        if (lastPage.data.categories.next === null) return;
        return lastPage.pageParam + 20;
      },
    }
  );

  const targetRef = useIntersect<HTMLDivElement>((entry, observer) => {
    if (!hasNextPage) return;

    fetchNextPage();

    observer.unobserve(entry.target);
  }, 0.7);

  return (
    <S.Container>
      {console.log(isFetching)}
      <S.FlexBox>
        {data?.pages.map((page) =>
          page?.data?.categories?.items.map((category: SpotifyApi.CategoryObject) => (
            <Category key={category.id} category={category} />
          ))
        )}

        <div ref={targetRef} />
        {isFetching && (
          <div
            css={css`
              position: absolute;
              top: 50%;
            `}
          >
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        )}
      </S.FlexBox>
    </S.Container>
  );
};

export default CategoresPage;
