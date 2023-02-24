import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 550px;
  height: 300px;
  padding: 20px;
  border-radius: 5px;
  background-color: #181818;
`;

export const PLImage = styled.img`
  border-radius: 5px;
`;

export const PLInfo = styled.div`
  position: relative;
  margin-left: 10px;
`;

export const PLName = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
`;

export const PLDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightgray};
`;

export const PLButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 130px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
