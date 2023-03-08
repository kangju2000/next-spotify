import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Artist from 'components/common/Artist/Artist';
import PlaylistTrack from 'components/common/PlaylistTrack/PlaylistTrack';
import { useGetSearchAll } from 'hooks/queries/search';
import { searchQueryState } from 'recoil/atoms';

const SearchPage = () => {
  const query = useRecoilValue(searchQueryState);
  const [searchData, setSearchData] = useState<SpotifyApi.SearchResponse | null>(null);

  const { data } = useGetSearchAll(query);

  useEffect(() => {
    if (data) setSearchData(data.data);
  }, [data]);

  return (
    <S.Container>
      <S.Wrapper>
        <h2>곡</h2>
        <S.Tracks>
          {searchData?.tracks?.items.slice(0, 4).map((track) => (
            <PlaylistTrack key={track.id} track={track} />
          ))}
        </S.Tracks>
      </S.Wrapper>
      <S.Wrapper>
        <h2>아티스트</h2>
        <S.Artists>
          {searchData?.artists?.items.map((artist) => (
            <Artist key={artist.id} artist={artist} />
          ))}
        </S.Artists>
      </S.Wrapper>
    </S.Container>
  );
};

const S = {
  Container: styled.div``,
  Wrapper: styled.div`
    margin-bottom: 40px;
    h2 {
      margin-bottom: 10px;
      font-size: 24px;
      font-weight: 700;
    }
  `,
  Tracks: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  Artists: styled.div`
    display: flex;
    gap: 20px;
  `,
};

export default SearchPage;
