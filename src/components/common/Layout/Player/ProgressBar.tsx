import styled from '@emotion/styled';
import { Progress } from '@mantine/core';
import msToTime from 'utils/msToTime';

interface ProgressBarProps {
  progressTime: number | null;
  durationTime: number | null;
}

const ProgressBar = ({ progressTime, durationTime }: ProgressBarProps) => {
  progressTime = progressTime || 0;
  durationTime = durationTime || 0;

  const progressValue = (progressTime / durationTime) * 100;

  return (
    <S.Container>
      <S.TimeText>{msToTime(progressTime)}</S.TimeText>
      <Progress size="sm" value={progressValue} color="white" bg="#a1a1a1" />
      <S.TimeText>{msToTime(durationTime)}</S.TimeText>
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
