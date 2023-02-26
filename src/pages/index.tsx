import styled from '@emotion/styled';
import { getRecommendations } from 'api/browse';
import RecommendTracks from 'components/home/RecommendTracks/RecommendTracks';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

function Home({ tracks }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Container>
      <RecommendTracks tracks={tracks} />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await getRecommendations({ seed_genres: 'k-pop', limit: 4 });

  return {
    props: {
      tracks: response.data.tracks,
    },
  };
};

export const Container = styled.div`
  padding: 20px;
`;

export default Home;
