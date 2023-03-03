import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding-left: 100px;
  background: linear-gradient(#222222, #121212);
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 0 30px;
`;
