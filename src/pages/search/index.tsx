import api from 'api/api';
import axios from 'axios';
import { contextType } from 'types/type';

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

export const getServerSideProps = async (context: contextType) => {
  const { q, type } = context.query;

  const res = await axios({
    method: 'get',
    url: `https://api.spotify.com/v1/search?q=${q}&type=${type || 'track,artist'}&limit=3`,
  });

  return {
    props: { data: res.data },
  };
};

export default Search;
