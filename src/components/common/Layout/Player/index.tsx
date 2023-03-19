import styled from '@emotion/styled';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { playbackDataState } from 'recoil/atoms';
import ProgressBar from './ProgressBar';

const Player = () => {
  const playbackData = useRecoilValue(playbackDataState);
  console.log(playbackData);

  if (!playbackData || !playbackData?.item)
    return <S.Container>재생 중인 노래가 없습니다.</S.Container>;

  return (
    <S.Container>
      <S.Track.Wrapper>
        {'artists' in playbackData.item && (
          <>
            <Image src={playbackData.item.album.images[0].url} alt="album" width={64} height={64} />
            <div>
              <S.Track.Name>{playbackData.item.name}</S.Track.Name>
              <S.Track.Artist>{playbackData.item.artists[0].name}</S.Track.Artist>
            </div>
          </>
        )}
      </S.Track.Wrapper>
      <S.Controls>
        <S.Playback>
          <Image src="/images/prev_song_arrow.svg" alt="previous" width={36} height={36} />
          {playbackData.is_playing ? (
            <Image src="/images/pause_circle.svg" alt="pause" width={36} height={36} />
          ) : (
            <Image src="/images/play_circle.svg" alt="play" width={36} height={36} />
          )}
          <Image src="/images/next_song_arrow.svg" alt="next" width={36} height={36} />
        </S.Playback>
        <ProgressBar
          progressTime={playbackData.progress_ms}
          durationTime={playbackData.item.duration_ms}
        />
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

      div {
        margin-left: 10px;
      }
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
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
    * {
      cursor: pointer;
    }
  `,
  Options: styled.div`
    width: 30%;
  `,
};

export default Player;
