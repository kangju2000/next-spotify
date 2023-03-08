import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import api from 'api/api';
import { searchQueryState } from 'recoil/atoms';

const SearchPage = () => {
  const query = useRecoilValue(searchQueryState);
  const [searchData, setSearchData] = useState<SpotifyApi.ArtistSearchResponse | null>(null);

  useEffect(() => {
    api({
      method: 'get',
      url: `/v1/search?q=${query}&type=artist`,
    }).then((res) => setSearchData(res.data));
  }, [query]);

  return <>{console.log(searchData)}</>;
};

export default SearchPage;
