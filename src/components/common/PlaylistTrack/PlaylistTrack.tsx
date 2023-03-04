import { css } from '@emotion/react';
import Image from 'next/image';

interface PlaylistTrackProps {
  track: SpotifyApi.TrackObjectFull;
}

const PlaylistTrack = ({ track }: PlaylistTrackProps) => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <Image src={track.album.images[2].url} alt={track.name} width={64} height={64} />
      <div>
        <h3>{track.name}</h3>
        <p>{track.artists.map((artist) => artist.name)}</p>
      </div>
    </div>
  );
};

export default PlaylistTrack;
