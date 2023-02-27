import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  border: none;
  background-color: inherit;
`;

export const MoreButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: inherit;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lightgray};
  cursor: pointer;
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
