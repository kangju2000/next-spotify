import styled from '@emotion/styled';
import { Loader } from '@mantine/core';
import Track from 'components/common/Track';
import { useGetRecommendations } from 'hooks/queries/browse';

const RecommendTracks = () => {
  const { data: recommendationsData, isLoading } = useGetRecommendations({
    seed_genres: 'pop',
    limit: 4,
  });

  return (
    <S.Container>
      <S.Title>추천 노래</S.Title>
      <S.Tracks>
        {isLoading ? (
          <Loader color="gray" size="lg" />
        ) : (
          recommendationsData?.data.tracks.map((track) => <Track key={track.id} track={track} />)
        )}
      </S.Tracks>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    min-height: 400px;
    margin-bottom: 20px;
  `,
  Title: styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  `,
  Tracks: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  `,
};

export default RecommendTracks;
