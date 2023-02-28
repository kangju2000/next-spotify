import styled from '@emotion/styled';
import { getCategories, getRecommendations } from 'api/browse';
import Categories from 'components/home/Categories/Categories';
import RecommendTracks from 'components/home/RecommendTracks/RecommendTracks';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';

function Home() {
  return (
    <Container>
      <RecommendTracks />
      <Categories />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('recommendations', () =>
    getRecommendations({ seed_genres: 'k-pop', limit: 4 })
  );

  await queryClient.prefetchQuery('categories', () => getCategories());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export default Home;
