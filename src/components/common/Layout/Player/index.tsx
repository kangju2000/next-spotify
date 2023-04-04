import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import api from 'api/api';
import { loginDataState } from 'recoil/atoms';
import { getToken } from 'utils/TokenManager';
import ProgressBar from './ProgressBar';

const Player = () => {
  const [is_paused, setPaused] = useState(false);
  const [player, setPlayer] = useState<Spotify.Player | null>(null);
  const [current_track, setTrack] = useState<Spotify.Track | null>(null);
  const [is_active, setActive] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  const loginData = useRecoilValue(loginDataState);

  useEffect(() => {
    if (!loginData) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb) => {
          cb(getToken());
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);

        api.put('https://api.spotify.com/v1/me/player', {
          device_ids: [device_id],
          play: false,
        });
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.addListener('player_state_changed', (state) => {
        if (!state) {
          return;
        }

        setTrack(state.track_window.current_track);
        setPaused(state.paused);
        setPosition(state.position);
        setDuration(state.duration);

        player.getCurrentState().then((state) => {
          !state ? setActive(false) : setActive(true);
        });
      });

      player.connect().then((success) => {
        if (success) {
          console.log('The Web Playback SDK successfully connected to Spotify!');
        }
      });
    };
  }, []);

  useEffect(() => {
    if (is_paused) {
      return;
    }

    const interval = setInterval(() => {
      setPosition((prev) => prev + 100);
    }, 100);

    return () => clearInterval(interval);
  }, [is_paused]);

  if (!loginData) return <S.Container>로그인 후 이용해주세요.</S.Container>;
  if (!is_active || !current_track || !player)
    return <S.Container>재생 중인 노래가 없습니다.</S.Container>;

  return (
    <S.Container>
      <S.Track.Wrapper>
        <Image src={current_track.album.images[0].url} alt="album" width={64} height={64} />
        <div>
          <S.Track.Name>{current_track.name}</S.Track.Name>
          <S.Track.Artist>{current_track.artists[0].name}</S.Track.Artist>
        </div>
      </S.Track.Wrapper>
      <S.Controls>
        <S.Playback>
          <Image
            src="/images/prev_song_arrow.svg"
            alt="previous"
            width={36}
            height={36}
            onClick={() => {
              player.previousTrack();
              setPosition(0);
            }}
          />
          <Image
            src={`/images/${is_paused ? 'play' : 'pause'}_circle.svg`}
            alt={is_paused ? 'play' : 'pause'}
            width={36}
            height={36}
            onClick={() => player.togglePlay()}
          />
          <Image
            src="/images/next_song_arrow.svg"
            alt="next"
            width={36}
            height={36}
            onClick={() => {
              player.nextTrack();
              setPosition(0);
            }}
          />
        </S.Playback>
        <ProgressBar position={position} duration={duration} />
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
