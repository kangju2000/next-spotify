import { css } from '@emotion/react';
import styled from '@emotion/styled';
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
  let playlistNumber = 1;
  console.log(data);

  return (
    <S.Container>
      <S.Tracks>
        {data?.pages.map((page) =>
          page.data.items.map((track) => {
            if (track.track) {
              return (
                <div
                  key={track.track.id}
                  css={css`
                    display: flex;
                    align-items: center;
                  `}
                >
                  <S.PlaylistNumber>{playlistNumber++}</S.PlaylistNumber>
                  <PlaylistTrack track={track.track} />
                </div>
              );
            }
          })
        )}
      </S.Tracks>
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

  await queryClient.prefetchInfiniteQuery(['playlistTracks', id], ({ pageParam = 0 }) =>
    getPlaylistTracks({ pageParam, id })
  );

  return {
    props: { dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))), id },
  };
};

const S = {
  Container: styled.div``,
  Tracks: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  PlaylistNumber: styled.p`
    margin-right: 10px;
  `,
};

export default PlaylistPage;
