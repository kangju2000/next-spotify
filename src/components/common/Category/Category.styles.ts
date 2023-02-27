import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.darkgray};
  border-radius: 5px;
  cursor: pointer;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const Name = styled.h2`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
`;
