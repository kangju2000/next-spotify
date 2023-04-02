import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';
import ROUTES from 'constants/routes';

interface CategoryProps {
  category: SpotifyApi.CategoryObject;
}

const Category = ({ category }: CategoryProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.CATEGORY(category.id));
  };

  return (
    <S.Container onClick={handleClick}>
      <Image
        src={category.icons[0].url}
        alt="카테고리 이미지"
        width={isMobile ? 80 : 160}
        height={isMobile ? 80 : 160}
        css={css`
          border-radius: 5px;
        `}
      />
      <S.Name>{category.name}</S.Name>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.darkgray};
    border-radius: 5px;
    cursor: pointer;
  `,
  Name: styled.h2`
    margin-top: 10px;
    font-size: 18px;
    font-weight: 700;
  `,
};

export default Category;
