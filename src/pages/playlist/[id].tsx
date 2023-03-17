import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { getPlaylistTracks } from 'api/browse';
import PlaylistTrack from 'components/common/PlaylistTrack';
import TargetDiv from 'components/common/TargetDiv/TargetDiv';
import { useGetPlaylist, useGetPlaylistTracks } from 'hooks/queries/browse';

interface PlaylistPageProps {
  id: string;
}

const PlaylistPage = ({ id }: PlaylistPageProps) => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetPlaylistTracks(id);
  const { data: playlistData } = useGetPlaylist(id);

  let playlistNumber = 1;
  console.log(playlistData?.data);

  return (
    <S.Container>
      <S.Playlist>
        <Image
          src={playlistData?.data.images[0].url ?? ''}
          alt={playlistData?.data.name ?? '플레이리스트 이미지'}
          width={300}
          height={300}
          css={css`
            border-radius: 5px;
          `}
        />
        <S.Description>{playlistData?.data.description}</S.Description>
      </S.Playlist>
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
  Playlist: styled.div`
    display: flex;
    margin-bottom: 30px;
  `,
  Description: styled.div`
    margin-left: 20px;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
  `,
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
