import { useEffect, useState } from 'react';
import * as S from './Clock.styles';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const formattedDate = time.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
  });

  return (
    <S.Clock>
      <S.Time>{formattedTime}</S.Time>
      <S.Date>{formattedDate}</S.Date>
    </S.Clock>
  );
};

export default Clock;
