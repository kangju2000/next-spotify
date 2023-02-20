/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { postToken } from 'api/token';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { setToken } from 'utils/TokenManager';

function Home({ token }: { token: string }) {
  const router = useRouter();
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = async () => {
    router.push(`/search?q=${value}`);
  };

  useEffect(() => {
    setToken(token);
  }, []);

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
        />
      </div>
      <button onClick={handleClick}>클릭!</button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.access_token || null;
  if (token) {
    return {
      props: { token },
    };
  }

  const response = await postToken();
  const data = response.data;
  setToken(data.access_token);

  return {
    props: {
      token: data.access_token,
    },
  };
};

export default Home;
