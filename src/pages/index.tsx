import styled from '@emotion/styled';
import { getRecommendations } from 'api/browse';
import RecommendTracks from 'components/home/RecommendTracks/RecommendTracks';
import { useGetRecommendations } from 'hooks/queries/browse';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

function Home({ tracks }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: recommendations } = useGetRecommendations(
    {
      seed_genres: 'k-pop',
      limit: 4,
    },
    { initialData: tracks }
  );

  return (
    <Container>
      {recommendations?.data?.tracks && <RecommendTracks tracks={recommendations.data.tracks} />}
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getRecommendations({
    seed_genres: 'k-pop',
    limit: 4,
  });

  return {
    props: {
      tracks: data.tracks,
    },
  };
};

export const Container = styled.div`
  padding: 20px;
`;

export default Home;
