import styled from '@emotion/styled';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100vh;
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.black};
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  img {
    cursor: pointer;
  }
`;
