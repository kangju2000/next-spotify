import { NextPageContext } from 'next';
import { album, artist, SearchArtists, SearchTracks } from 'types/spotify';
import api from 'api/api';
import axios from 'axios';
import { getSearch } from 'api/search';

const Search = ({ data }) => {
  const handleClick = async () => {
    const res = await api({
      method: 'get',
      url: `/v1/search?q=a&type=artist`,
    });
    console.log(res.data);
  };
  console.log(data);
  return (
    <>
      <button onClick={handleClick}>클릭</button>
      {/* {searchData &&
        searchData[searchData['type']]['items'].map((item: artist | album) => (
          <p key={item.id}>{item.name}</p>
        ))} */}
    </>
  );
};

export const getServerSideProps = async ({ req }: NextPageContext) => {
  // const res = await api({
  //   method: 'get',
  //   url: `/v1/search?q=${query.q}&type=artist`,
  // });
  // const data = res.data;
  // console.log(data);

  // const cookie = req ? req.headers.cookie : '';
  // axios.defaults.headers.Cookie = req && cookie ? cookie : '';
  const res = await getSearch({ q: '아이유', type: 'artist' });

  return {
    props: { data: res.data },
    // props: { searchData: data },
  };
};

export default Search;
