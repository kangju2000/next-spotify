import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Seekbar } from 'react-seekbar';
import msToTime from 'utils/msToTime';

interface ProgressBarProps {
  is_paused: boolean;
  position: number;
  setPosition: Dispatch<SetStateAction<number>>;
  duration: number;
  onSeek: (position: number) => void;
}

const ProgressBar = ({ is_paused, position, setPosition, duration, onSeek }: ProgressBarProps) => {
  const [pos, setPos] = useState(position);

  useEffect(() => {
    if (is_paused) {
      return;
    }
    setPos(position);
    const interval = setInterval(() => {
      setPos((prev) => prev + 400);
    }, 400);

    return () => clearInterval(interval);
  }, [is_paused, position, setPosition]);

  return (
    <S.Container>
      <S.TimeText>{msToTime(pos)}</S.TimeText>
      <Seekbar height={5} position={pos} duration={duration} onSeek={onSeek} fullWidth />
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
