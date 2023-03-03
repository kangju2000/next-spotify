import { useRouter } from 'next/router';
import Category from 'components/common/Category/Category';
import ROUTES from 'constants/routes';
import { useGetCategories } from 'hooks/queries/browse';
import * as S from './Categories.styles';

const Categories = () => {
  const { data: categoriesData } = useGetCategories();
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.CATEGORIES);
  };

  return (
    <S.Container>
      <S.Title>카테고리</S.Title>
      <S.MoreButton onClick={handleClick}>모두 보기</S.MoreButton>
      <S.Categories>
        {categoriesData?.pages[0].data.categories.items.slice(0, 8).map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </S.Categories>
    </S.Container>
  );
};

export default Categories;
