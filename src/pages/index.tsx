import Categories from 'components/home/Categories/Categories';
import RecommendPlaylist from 'components/home/RecommendPlaylist/RecommendPlaylist';
import * as S from './index.styles';

function Home() {
  return (
    <S.Container>
      <RecommendPlaylist />
      <Categories />
    </S.Container>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const token = req.cookies.access_token || null;
//   if (token) {
//     return {
//       props: { token },
//     };
//   }

//   const response = await postToken();
//   const data = response.data;
//   setToken(data.access_token);

//   return {
//     props: {
//       token: data.access_token,
//     },
//   };
// };

export default Home;
