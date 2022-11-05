import styled from '@emotion/styled';

interface sidebarProps {
  isOpen: boolean;
}

const StyledSideBar = styled.nav`
  position: absolute;
  left: ${({ isOpen }: sidebarProps) => (isOpen ? '0px' : '-100px')};
  width: 100px;
  height: 100vh;
  background-color: red;
  transition: all 0.5s;
`;

const Sidebar = ({ isOpen }: sidebarProps) => {
  return (
    <StyledSideBar isOpen={isOpen}>
      <p>Top 100</p>
      <p>New Released</p>
      <p></p>
    </StyledSideBar>
  );
};

export default Sidebar;
