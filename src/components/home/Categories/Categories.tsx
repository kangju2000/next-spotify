import Category from 'components/common/Category/Category';
import * as S from './Categories.styles';

const Categories = ({ categories }: SpotifyApi.MultipleCategoriesResponse) => {
  return (
    <S.Container>
      <S.Title>카테고리</S.Title>
      <S.MoreButton>모두 보기</S.MoreButton>
      <S.Categories>
        {categories.items.slice(0, 8).map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </S.Categories>
    </S.Container>
  );
};

export default Categories;
