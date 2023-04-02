import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import ROUTES from 'constants/routes';
import { searchValueState } from 'recoil/atoms';

const Sidebar = () => {
  const router = useRouter();
  const setSearchValue = useSetRecoilState(searchValueState);

  return (
    <S.Container>
      <S.IconWrapper>
        <Image
          src="/images/home.svg"
          alt="Home"
          width={24}
          height={24}
          onClick={() => {
            setSearchValue('');
            router.push(ROUTES.HOME);
          }}
        />
        <Image
          src="/images/search.svg"
          alt="Search"
          width={24}
          height={24}
          onClick={() => router.push(ROUTES.SEARCH)}
          css={css`
            filter: invert(1);
          `}
        />
      </S.IconWrapper>
    </S.Container>
  );
};

const S = {
  Container: styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100px;
    padding: 100px 0;
    background: ${({ theme }) => theme.colors.black};
  `,
  IconWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    img {
      cursor: pointer;
    }
  `,
};

export default Sidebar;
