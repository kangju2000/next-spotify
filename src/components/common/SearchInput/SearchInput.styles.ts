import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 400px;
  height: 50px;
  padding: 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: inherit;
  &::placeholder {
    color: ${({ theme }) => theme.colors.lightgray};
  }
`;
