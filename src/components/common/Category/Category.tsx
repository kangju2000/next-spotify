import { useRouter } from 'next/router';
import ROUTES from 'constants/routes';
import * as S from './Category.styles';

export interface CategoryProps {
  category: SpotifyApi.CategoryObject;
}

const Category = ({ category }: CategoryProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.CATEGORY(category.id));
  };

  return (
    <S.Container onClick={handleClick}>
      <S.Thumbnail src={category.icons[0].url} alt="카테고리 이미지" />
      <S.Name>{category.name}</S.Name>
    </S.Container>
  );
};

export default Category;
