import Track from 'components/common/Track/Track';
import * as S from './RecommendTracks.styles';

export interface RecommendTrackProps {
  tracks: SpotifyApi.RecommendationTrackObject[];
}

const RecommendTracks = ({ tracks }: RecommendTrackProps) => {
  return (
    <S.Container>
      <S.Title>추천 노래</S.Title>
      <S.Tracks>
        {tracks.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </S.Tracks>
    </S.Container>
  );
};

export default RecommendTracks;
