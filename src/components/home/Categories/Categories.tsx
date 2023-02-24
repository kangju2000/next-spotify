import Category from 'components/common/Category/Category';
import * as S from './Categories.styles';

const Categories = () => {
  const mockCategory: SpotifyApi.CategoryObject = {
    href: 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFzHmL4tf05da',
    icons: [
      {
        height: 274,
        url: 'https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg',
        width: 274,
      },
    ],
    id: '0JQ5DAqbMKFzHmL4tf05da',
    name: 'Humör',
  };

  return (
    <S.Container>
      <S.Title>카테고리</S.Title>
      <S.MoreButton>모두 보기</S.MoreButton>
      <S.Categories>
        <Category category={mockCategory} />
        <Category category={mockCategory} />
      </S.Categories>
    </S.Container>
  );
};

export default Categories;
