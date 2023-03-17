import styled from '@emotion/styled';
import { Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
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
        <Loader color="gray" />
      )}
    </S.Clock>
  );
};

const S = {
  Clock: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 140px;
    color: ${({ theme }) => theme.colors.white};
  `,
  Time: styled.p`
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: 700;
  `,
  Date: styled.p`
    font-size: 12px;
  `,
  Loading: styled.div`
    margin-left: 30px;
  `,
};

export default Clock;
