import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import ROUTES from 'constants/routes';
import { searchValueState } from 'recoil/atoms';
import * as S from './Sidebar.styles';

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

export default Sidebar;
