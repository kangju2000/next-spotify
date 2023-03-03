import styled from '@emotion/styled';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};
`;
