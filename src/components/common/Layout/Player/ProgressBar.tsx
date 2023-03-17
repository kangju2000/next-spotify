import styled from '@emotion/styled';
import { Progress } from '@mantine/core';

const ProgressBar = () => {
  return (
    <S.Container>
      <S.TimeText>0:00</S.TimeText>
      <Progress size="sm" value={50} color="white" bg="#a1a1a1" />
      <S.TimeText>3:44</S.TimeText>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    div {
      width: 100%;
    }
  `,
  TimeText: styled.p`
    margin: 0 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.lightgray};
  `,
};

export default ProgressBar;
