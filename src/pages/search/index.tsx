import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import Artist from 'components/common/Artist';
import PlaylistTrack from 'components/common/PlaylistTrack';
import ROUTES from 'constants/routes';
import { useGetSearchAll } from 'hooks/queries/search';
import { searchQueryState } from 'recoil/atoms';

const SearchPage = () => {
  const [query, setQuery] = useRecoilState(searchQueryState);
  const router = useRouter();

  const { data } = useGetSearchAll(query);

  if (!query)
    return (
      <S.Container>
        <h2
          css={css`
            text-align: center;
            font-size: 36px;
          `}
        >
          찾고 싶은 음악 또는 가수를 검색하세요.
        </h2>
      </S.Container>
    );

  if (!data?.data.tracks?.items.length && !data?.data.artists?.items.length)
    return (
      <S.Container>
        <h2>검색 결과가 없습니다.</h2>
      </S.Container>
    );

  return (
    <S.Container>
      <S.Wrapper>
        <h2>곡</h2>
        <S.MoreButton
          onClick={() => {
            setQuery('');
            router.push({
              pathname: ROUTES.SEARCH_SONG,
              query: { query },
            });
          }}
        >
          모두 보기
        </S.MoreButton>
        <S.Tracks>
          {data.data?.tracks?.items.slice(0, 4).map((track) => (
            <PlaylistTrack key={track.id} track={track} />
          ))}
        </S.Tracks>
      </S.Wrapper>
      <S.Wrapper>
        <h2>아티스트</h2>
        <S.MoreButton
          onClick={() => {
            setQuery('');
            router.push({
              pathname: ROUTES.SEARCH_ARTIST,
              query: { query },
            });
          }}
        >
          모두 보기
        </S.MoreButton>
        <S.Artists>
          {data.data?.artists?.items.map((artist) => (
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
