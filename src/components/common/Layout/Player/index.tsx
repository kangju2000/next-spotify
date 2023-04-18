import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import api from 'api/api';
import { loginDataState } from 'recoil/atoms';
import { getToken } from 'utils/TokenManager';
import ProgressBar from './ProgressBar';
import VolumeBar from './VolumeBar';

const Player = () => {
  const [is_paused, setPaused] = useState(true);
  const [player, setPlayer] = useState<Spotify.Player | null>(null);
  const [current_track, setTrack] = useState<Spotify.Track | null>(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);
  const [volume, setVolume] = useState(0);

  const loginData = useRecoilValue(loginDataState);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'player',
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
        });

        player.getVolume().then((volume) => {
          console.log('Volume of device is', volume);
          setVolume(volume);
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
      });

      player.connect().then((success) => {
        if (success) {
          console.log('The Web Playback SDK successfully connected to Spotify!');
        }
      });
      player.addListener('initialization_error', ({ message }) => {
        console.log(message);
      });

      player.addListener('authentication_error', ({ message }) => {
        console.log(message);
      });

      player.addListener('account_error', ({ message }) => {
        console.log(message);
      });
    };
  }, [loginData]);

  return (
    <S.Container>
      {current_track ? (
        <S.Track.Wrapper>
          <Image src={current_track.album.images[0].url} alt="album" width={64} height={64} />
          <div>
            <S.Track.Name>{current_track.name}</S.Track.Name>
            <S.Track.Artist>{current_track.artists[0].name}</S.Track.Artist>
          </div>
        </S.Track.Wrapper>
      ) : (
        <S.Track.Wrapper>
          <div
            css={css`
              width: 64px;
              height: 64px;
              background-color: #333;
            `}
          ></div>
          <div></div>
        </S.Track.Wrapper>
      )}
      <S.Controls>
        <S.Playback>
          <Image
            src="/images/prev_song_arrow.svg"
            alt="previous"
            width={36}
            height={36}
            onClick={() => {
              player?.previousTrack();
              setPosition(0);
            }}
          />
          <Image
            src={`/images/${is_paused ? 'play' : 'pause'}_circle.svg`}
            alt={is_paused ? 'play' : 'pause'}
            width={36}
            height={36}
            onClick={() => player?.togglePlay()}
          />
          <Image
            src="/images/next_song_arrow.svg"
            alt="next"
            width={36}
            height={36}
            onClick={() => {
              player?.nextTrack();
              setPosition(0);
            }}
          />
        </S.Playback>
        <ProgressBar
          is_paused={is_paused}
          position={position}
          setPosition={setPosition}
          duration={duration}
          onSeek={(position) => {
            player?.seek(position);
            setPosition(position);
          }}
        />
      </S.Controls>
      <S.Options>
        <VolumeBar
          volume={volume}
          onSeek={() => {
            player?.setVolume(volume);
            setVolume(volume);
          }}
        />
      </S.Options>
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
    display: flex;
    gap: 10px;
    justify-content: end;
    align-items: center;
    width: 30%;
  `,
};

export default Player;
