import Category from 'components/common/Category/Category';
import * as S from './Categories.styles';

export interface CategoriesProps extends SpotifyApi.MultipleCategoriesResponse {}

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <S.Container>
      <S.Title>카테고리</S.Title>
      <S.MoreButton>모두 보기</S.MoreButton>
      <S.Categories>
        {categories.items.map((category) => (
          <Category category={category} />
        ))}
      </S.Categories>
    </S.Container>
  );
};

export default Categories;
