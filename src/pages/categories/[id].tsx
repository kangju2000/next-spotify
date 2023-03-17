import styled from '@emotion/styled';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { getCategoryPlaylists } from 'api/browse';
import Playlist from 'components/common/Playlist';
import TargetDiv from 'components/common/TargetDiv';
import { useGetCategoryPlaylists } from 'hooks/queries/browse';

interface CategoryPageProps {
  id: string;
}

const CategoryPage = ({ id }: CategoryPageProps) => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetCategoryPlaylists(id);
  console.log(data);

  return (
    <S.Container>
      <S.Playlists>
        {data?.pages.map((page) =>
          page.data.playlists.items.map(
            (playlist) => playlist && <Playlist key={playlist.id} playlist={playlist} />
          )
        )}
      </S.Playlists>
      <TargetDiv
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </S.Container>
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

const S = {
  Container: styled.div``,
  Playlists: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  `,
};

export default CategoryPage;
