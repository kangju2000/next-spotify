import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 550px;
  height: 300px;
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.darkgray};
`;

export const Thumbnail = styled.img`
  border-radius: 5px;
`;

export const Info = styled.div`
  position: relative;
  width: 100%;
  margin-left: 10px;
`;

export const Name = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
`;

export const Description = styled.p`
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.lightgray};
`;

export const Button = styled.button`
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
