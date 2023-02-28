import Track from 'components/common/Track/Track';
import { useGetRecommendations } from 'hooks/queries/browse';
import { useQueryClient } from 'react-query';
import * as S from './RecommendTracks.styles';

const RecommendTracks = () => {
  const queryClient = useQueryClient();

  const { data: recommendationsData } = useGetRecommendations(
    {
      seed_genres: 'k-pop',
      limit: 4,
    },
    {
      staleTime: Infinity,
      onSuccess: () => {
        queryClient.setQueryData('recommendations', recommendationsData);
      },
    }
  );

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
