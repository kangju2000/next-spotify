/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { setCookie } from 'cookies-next';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { postToken } from 'api/token';
import api from 'api/api';
import { getSearch } from 'api/search';

function Home() {
  const router = useRouter();
  const [value, setValue] = useState<string>('');

  const onHandleSubmit = () => {
    router.push(`/search?q=${value}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onHandleSubmit();
    }
  };

  const handleClick = async () => {
    const res = await api({
      method: 'get',
      url: `/v1/search?q=${value}&type=artist`,
    });
    console.log(res.data);
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
      <button onClick={handleClick}>클릭!</button>
    </div>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const { req, res } = context;

  await postToken().then((response) => {
    const data = response.data;
    console.log(data);
    setCookie('access_token', data['access_token'], {
      req,
      res,
      maxAge: data['expires_in'],
    });
  });

  return {
    props: {},
  };
};

export default Home;
