import { ThreeDots } from 'react-loader-spinner';
import Track from 'components/common/Track/Track';
import { useGetRecommendations } from 'hooks/queries/browse';
import * as S from './RecommendTracks.styles';

const RecommendTracks = () => {
  const { data: recommendationsData, isLoading } = useGetRecommendations({
    seed_genres: 'k-pop',
    limit: 4,
  });

  return (
    <S.Container>
      <S.Title>추천 노래</S.Title>
      <S.Tracks>
        {isLoading ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        ) : (
          recommendationsData?.data.tracks.map((track) => <Track key={track.id} track={track} />)
        )}
      </S.Tracks>
    </S.Container>
  );
};

export default RecommendTracks;
