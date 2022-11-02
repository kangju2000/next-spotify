/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [value, setValue] = useState<string>('');

  const onHandleSubmit = () => {
    router.push(`/search?query=${value}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onHandleSubmit();
    }
  };

  return (
    <div
      css={css`
        width: 1000px;
        height: 100%;
        margin: 0 auto;
        margin-top: 250px;
      `}
    >
      <h1
        css={css`
          margin-bottom: 100px;
          font-size: 40px;
          text-align: center;
        `}
      >
        음악을 검색하세요
      </h1>
      <div
        css={css`
          text-align: center;
        `}
      >
        <input
          type="text"
          id="search"
          css={css`
            width: 840px;
            height: 100px;
            padding: 10px;
            border: none;
            border-radius: 15px;
            background-color: lightgray;
            font-size: 18px;
          `}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
}
