import * as S from './Track.styles';

export interface TrackProps {
  track: SpotifyApi.RecommendationTrackObject;
}

const Track = ({ track }: TrackProps) => {
  const handleNameClick = () => {
    console.log(track.album);
  };

  const handleArtistClick = () => {
    console.log(track.artists[0].id);
  };

  return (
    <S.Container onClick={handleNameClick} url={track.album.images[1].url}>
      <S.Layer>
        <S.Name>{track.name}</S.Name>
        <S.Artist onClick={handleArtistClick}>{track.artists[0].name}</S.Artist>
      </S.Layer>
    </S.Container>
  );
};

export default Track;
