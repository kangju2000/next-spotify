import { getRecommendations } from 'api/browse';
import { postToken } from 'api/token';
import Categories from 'components/home/Categories/Categories';
import RecommendTrack from 'components/home/RecommendTrack/RecommendTrack';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import * as S from './index.styles';

function Home({ album }: SpotifyApi.RecommendationTrackObject) {
  return (
    <S.Container>
      <RecommendTrack album={album} />
      {/* <Categories categories={categories} /> */}
    </S.Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await getRecommendations({ seed_genres: 'k-pop', limit: 1 });

  return {
    props: {
      playlist: response.data.tracks[0],
    },
  };
};

export default Home;
