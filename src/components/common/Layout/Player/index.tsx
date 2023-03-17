import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import ProgressBar from './ProgressBar';

const Player = () => {
  return (
    <S.Container>
      <S.Track.Wrapper>
        <div
          css={css`
            width: 64px;
            height: 64px;
            background-color: gray;
            margin-right: 10px;
          `}
        ></div>
        <div>
          <S.Track.Name>에필로그</S.Track.Name>
          <S.Track.Artist>아이유</S.Track.Artist>
        </div>
      </S.Track.Wrapper>
      <S.Controls>
        <S.Playback>
          <Image src="/images/prev_song_arrow.svg" alt="previous" width={36} height={36} />
          <Image src="/images/play_circle.svg" alt="play" width={36} height={36} />
          <Image src="/images/next_song_arrow.svg" alt="next" width={36} height={36} />
        </S.Playback>
        <ProgressBar />
      </S.Controls>
      <S.Options></S.Options>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 0 20px;
    background-color: ${({ theme }) => theme.colors.darkgray};
    color: ${({ theme }) => theme.colors.white};
    z-index: 100;
  `,
  Track: {
    Wrapper: styled.div`
      display: flex;
      align-items: center;
      width: 30%;
    `,
    Name: styled.p`
      margin-bottom: 4px;
      font-size: 14px;
    `,
    Artist: styled.p`
      font-size: 12px;
      color: ${({ theme }) => theme.colors.lightgray};
    `,
  },
  Controls: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
  `,
  Playback: styled.div`
    margin-bottom: 10px;
  `,
  Options: styled.div`
    width: 30%;
  `,
};

export default Player;
