import { css } from '@emotion/react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { getCategoryPlaylists } from 'api/browse';
import Playlist from 'components/common/Playlist/Playlist';
import TargetDiv from 'components/common/TargetDiv/TargetDiv';
import { useGetCategoryPlaylists } from 'hooks/queries/browse';

interface CategoryPageProps {
  id: string;
}

const CategoryPage = ({ id }: CategoryPageProps) => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetCategoryPlaylists(id);
  console.log(data);

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
          page.data.playlists.items.map(
            (playlist) => playlist && <Playlist key={playlist.id} playlist={playlist} />
          )
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
