import api from 'api/api';
import { getSearch } from 'api/search';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getSearchQuery } from 'types/spotify';

const Search = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await getSearch(query as getSearchQuery);

  return {
    props: { data: response.data },
  };
};

export default Search;
