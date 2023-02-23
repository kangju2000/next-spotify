import styled from '@emotion/styled';

export const Clock = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Time = styled.p`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 700;
`;

export const Date = styled.p`
  font-size: 12px;
`;
