/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface sidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: sidebarProps) => {
  return (
    <nav
      css={css`
        position: absolute;
        left: ${isOpen ? '0px' : '-100px'};
        width: 100px;
        height: 100vh;
        background-color: red;
        transition: all 0.5s;
      `}
    >
      <p>Top 100</p>
      <p>New Released</p>
      <p></p>
    </nav>
  );
};

export default Sidebar;
