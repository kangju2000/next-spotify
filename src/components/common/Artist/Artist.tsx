import { css } from '@emotion/react';
import Image from 'next/image';

export interface ArtistProps {
  artist: SpotifyApi.ArtistObjectFull;
}

const Artist = ({ artist }: ArtistProps) => {
  return (
    <div
      css={(theme) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 140px;
        padding: 20px;
        background-color: ${theme.colors.darkgray};
        border-radius: 5px;
      `}
    >
      <Image
        src={artist.images.length ? artist.images[0].url : '/images/artist.png'}
        alt={artist.name}
        width={100}
        height={100}
        css={css`
          border-radius: 50%;
          margin-bottom: 10px;
        `}
      />
      <h3>{artist.name}</h3>
    </div>
  );
};

export default Artist;
