import Playlist from 'components/common/Playlist/Playlist';
import * as S from './RecommendTrack.styles';

export interface RecommendTrackProps {
  album: SpotifyApi.RecommendationAlbumObject;
}

const RecommendTrack = ({ album }: RecommendTrackProps) => {
  return (
    <S.Container>
      <S.Title>추천 노래</S.Title>
      <Playlist playlist={album} />
    </S.Container>
  );
};

export default RecommendTrack;
