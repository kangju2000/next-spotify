import styled from '@emotion/styled';
import Categories from 'components/home/Categories/Categories';
import RecommendTracks from 'components/home/RecommendTracks/RecommendTracks';

function Home() {
  return (
    <Container>
      <RecommendTracks />
      <Categories />
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export default Home;
