import styled from '@emotion/styled';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  min-width: 600px;
  height: 100px;
`;

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
