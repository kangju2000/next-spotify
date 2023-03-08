import { useRecoilValue } from 'recoil';
import Categories from 'components/home/Categories/Categories';
import RecommendTracks from 'components/home/RecommendTracks/RecommendTracks';
import SearchPage from 'pages/search';
import { searchQueryState } from 'recoil/atoms';

function Home() {
  const query = useRecoilValue(searchQueryState);

  if (query === '')
    return (
      <>
        <RecommendTracks />
        <Categories />
      </>
    );

  return <SearchPage />;
}

export default Home;
