import Track from 'components/common/Track/Track';
import { useGetRecommendations } from 'hooks/queries/browse';
import * as S from './RecommendTracks.styles';

const RecommendTracks = () => {
  const { data: recommendationsData, isLoading: recommendationsIsLoading } = useGetRecommendations({
    seed_genres: 'k-pop',
    limit: 4,
  });

  return (
    <S.Container>
      <S.Title>추천 노래</S.Title>
      <S.Tracks>
        {recommendationsData?.data.tracks.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </S.Tracks>
    </S.Container>
  );
};

export default RecommendTracks;
