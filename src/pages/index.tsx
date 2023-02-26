import { getRecommendations } from 'api/browse';
import RecommendTracks from 'components/home/RecommendTracks/RecommendTracks';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import * as S from './index.styles';

function Home({ tracks }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <S.Container>
      <RecommendTracks tracks={tracks} />
    </S.Container>
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

export default Home;
