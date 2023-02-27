import styled from '@emotion/styled';
import { getCategories, getRecommendations } from 'api/browse';
import Categories from 'components/home/Categories/Categories';
import RecommendTracks from 'components/home/RecommendTracks/RecommendTracks';
import { useGetCategories, useGetRecommendations } from 'hooks/queries/browse';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

function Home({ tracks, categories }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(tracks, categories);
  const { data: recommendationsData } = useGetRecommendations(
    {
      seed_genres: 'k-pop',
      limit: 4,
    },
    { initialData: tracks }
  );

  const { data: categoriesData } = useGetCategories({ initialData: categories });

  return (
    <Container>
      {recommendationsData?.data?.tracks && (
        <RecommendTracks tracks={recommendationsData.data.tracks} />
      )}
      {categoriesData?.data?.categories && (
        <Categories categories={categoriesData.data.categories} />
      )}
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: recommendations } = await getRecommendations({
    seed_genres: 'k-pop',
    limit: 4,
  });

  const { data: categories } = await getCategories();

  return {
    props: {
      tracks: recommendations.tracks,
      categories: categories.categories,
    },
  };
};

export const Container = styled.div`
  padding: 20px;
`;

export default Home;
