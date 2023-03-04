import { css } from '@emotion/react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { RotatingLines } from 'react-loader-spinner';
import { getCategoryPlaylists } from 'api/browse';
import Playlist from 'components/common/Playlist/Playlist';
import { useGetCategoryPlaylists } from 'hooks/queries/browse';
import useIntersect from 'hooks/useIntersect';

interface CategoryPageProps {
  // data: SpotifyApi.CategoryPlaylistsResponse;
  id: string;
}

const CategoryPage = ({ id }: CategoryPageProps) => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetCategoryPlaylists(id);
  console.log(data);

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
          flex-wrap: wrap;
          gap: 20px;
        `}
      >
        {data?.pages.map((page) =>
          page.data.playlists.items.map((playlist) => (
            <Playlist key={playlist.id} playlist={playlist} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id?.toString() ?? '';

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(['categoryPlaylists', id], ({ pageParam = 0 }) =>
    getCategoryPlaylists({ pageParam, id })
  );

  return {
    props: { dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))), id },
  };
};

export default CategoryPage;
