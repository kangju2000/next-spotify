import styled from '@emotion/styled';
import { Seekbar } from 'react-seekbar';
import msToTime from 'utils/msToTime';

interface ProgressBarProps {
  position: number;
  duration: number;
  onSeek: (position: number) => void;
}

const ProgressBar = ({ position, duration, onSeek }: ProgressBarProps) => {
  return (
    <S.Container>
      <S.TimeText>{msToTime(position)}</S.TimeText>
      <Seekbar height={5} position={position} duration={duration} onSeek={onSeek} fullWidth />
      <S.TimeText>{msToTime(duration)}</S.TimeText>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `,
  TimeText: styled.p`
    margin: 0 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.lightgray};
  `,
};

export default ProgressBar;
