import styled from '@emotion/styled';

export const Container = styled.div<{ url: string }>`
  position: relative;
  width: 230px;
  height: 230px;
  border-radius: 5px;
  background-image: url(${({ url }) => url});
  background-size: cover;
  cursor: pointer;
`;

export const Layer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 20px;
  border-radius: 0 0 5px 5px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Name = styled.h2`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Artist = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.lightgray};
`;
