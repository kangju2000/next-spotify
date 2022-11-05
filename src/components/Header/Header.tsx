/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Sidebar from 'components/Sidebar/Sidebar';
import { useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} />
      <header
        css={css`
          position: relative;
          padding: 48px;
          text-align: center;
        `}
      >
        <span
          css={css`
            position: absolute;
            left: 48px;
            cursor: pointer;
            transition: transform 1s;
            &:focus {
              transform: rotate(90deg);
            }
          `}
        >
          <Image alt="메뉴" src="/images/menu.svg" width="24" height="24" onClick={onMenuClick} />
        </span>
        <p
          css={css`
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
            &:focus {
              transform: rotate(90deg);
            }
          `}
          onClick={() => router.push('/')}
        >
          Search Music
        </p>
      </header>
    </>
  );
};

export default Header;
