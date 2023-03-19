import styled from '@emotion/styled';
import { Loader } from '@mantine/core';
import { useRouter } from 'next/router';
import Category from 'components/common/Category';
import ROUTES from 'constants/routes';
import { useGetCategories } from 'hooks/queries/browse';

const Categories = () => {
  const { data: categoriesData, isLoading } = useGetCategories();
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.CATEGORIES);
  };

  return (
    <S.Container>
      <S.Title>카테고리</S.Title>
      <S.MoreButton onClick={handleClick}>모두 보기</S.MoreButton>
      <S.Categories>
        {isLoading ? (
          <Loader color="gray" size="lg" />
        ) : (
          categoriesData?.pages[0].data.categories.items
            .slice(0, 8)
            .map((category) => <Category key={category.id} category={category} />)
        )}
      </S.Categories>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    position: relative;
  `,
  Title: styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    border: none;
    background-color: inherit;
  `,
  MoreButton: styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background-color: inherit;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.lightgray};
    cursor: pointer;
  `,
  Categories: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  `,
};

export default Categories;
