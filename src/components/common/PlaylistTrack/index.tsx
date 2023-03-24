import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { usePostPlaybackQueue } from 'hooks/mutations/me';
import { loginDataState } from 'recoil/atoms';

interface PlaylistTrackProps {
  track: SpotifyApi.TrackObjectFull;
}

const PlaylistTrack = ({ track }: PlaylistTrackProps) => {
  const loginData = useRecoilValue(loginDataState);
  const { mutate } = usePostPlaybackQueue();

  const handlePlay = () => {
    if (!loginData) return alert('로그인이 필요합니다.');

    mutate({ uri: track.uri });
  };

  return (
    <S.Container>
      <div
        css={css`
          display: flex;
          align-items: center;
          flex: 1;
        `}
      >
        <Image
          src={track.album.images[2].url}
          alt={track.name}
          width={64}
          height={64}
          css={css`
            margin-right: 10px;
            border-radius: 5px;
          `}
        />
        <div>
          <S.Title>{track.name}</S.Title>
          <S.Artist>{track.artists.map((artist) => artist.name).join(', ')}</S.Artist>
        </div>
      </div>
      <S.Album>{track.album.name}</S.Album>
      <Image src="/images/play.svg" alt="artist" width={24} height={24} onClick={handlePlay} />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    img {
      cursor: pointer;
    }
  `,
  Title: styled.h3`
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 700;
  `,
  Artist: styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.lightgray};
  `,
  Album: styled.h3`
    flex: 1;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightgray};
  `,
};

export default PlaylistTrack;
