import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Artist from 'components/common/Artist';
import PlaylistTrack from 'components/common/PlaylistTrack';
import { useGetSearchAll } from 'hooks/queries/search';
import { searchQueryState } from 'recoil/atoms';

const SearchPage = () => {
  const query = useRecoilValue(searchQueryState);
  const [searchData, setSearchData] = useState<SpotifyApi.SearchResponse | null>(null);

  const { data } = useGetSearchAll(query);

  useEffect(() => {
    if (data) setSearchData(data.data);
  }, [data]);

  if (!searchData) return null;

  if (!searchData.tracks?.items.length && !searchData.artists?.items.length)
    return (
      <S.Container>
        <h2>검색 결과가 없습니다.</h2>
      </S.Container>
    );

  return (
    <S.Container>
      <S.Wrapper>
        <h2>곡</h2>
        <S.MoreButton>모두 보기</S.MoreButton>
        <S.Tracks>
          {searchData?.tracks?.items.slice(0, 4).map((track) => (
            <PlaylistTrack key={track.id} track={track} />
          ))}
        </S.Tracks>
      </S.Wrapper>
      <S.Wrapper>
        <h2>아티스트</h2>
        <S.MoreButton>모두 보기</S.MoreButton>
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
    position: relative;
    margin-bottom: 40px;
    h2 {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: 700;
    }
  `,
  MoreButton: styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background-color: inherit;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.lightgray};
    cursor: pointer;
  `,
  Tracks: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  Artists: styled.div`
    display: flex;
    gap: 20px;
    overflow: hidden;
  `,
};

export default SearchPage;
