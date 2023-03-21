import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import PlaylistTrack from 'components/common/PlaylistTrack';
import TargetDiv from 'components/common/TargetDiv';
import { useGetSearchTracks } from 'hooks/queries/search';

const SearchSongPage = () => {
  const router = useRouter();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetSearchTracks(
    router.query.query as string
  );

  return (
    <S.Container>
      {data?.pages?.map((page) =>
        page.data.tracks?.items.map((track) => <PlaylistTrack key={track.id} track={track} />)
      )}
      <TargetDiv
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
};

export default SearchSongPage;
