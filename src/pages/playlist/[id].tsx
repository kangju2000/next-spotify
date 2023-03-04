import { css } from '@emotion/react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { getPlaylistTracks } from 'api/browse';
import PlaylistTrack from 'components/common/PlaylistTrack/PlaylistTrack';
import TargetDiv from 'components/common/TargetDiv/TargetDiv';
import { useGetPlaylistTracks } from 'hooks/queries/browse';

interface PlaylistPageProps {
  id: string;
}

const PlaylistPage = ({ id }: PlaylistPageProps) => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetPlaylistTracks(id);
  console.log(data);

  return (
    <>
      <div css={css``}>
        {data?.pages.map((page) =>
          page.data.items.map(
            (track) => track.track && <PlaylistTrack key={track.track.id} track={track.track} />
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

  await queryClient.prefetchInfiniteQuery(['playlistTracks', id], ({ pageParam = 0 }) =>
    getPlaylistTracks({ pageParam, id })
  );

  return {
    props: { dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))), id },
  };
};

export default PlaylistPage;
