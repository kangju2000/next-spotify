import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import * as S from './Clock.styles';

const Clock = () => {
  const [time, setTime] = useState<Date>();

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (window) setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const formattedTime = time?.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const formattedDate = time?.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
  });

  return (
    <S.Clock>
      {time ? (
        <>
          <S.Time>{formattedTime}</S.Time>
          <S.Date>{formattedDate}</S.Date>
        </>
      ) : (
        <S.Loading>
          <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="40"
            visible={true}
          />
        </S.Loading>
      )}
    </S.Clock>
  );
};

export default Clock;
