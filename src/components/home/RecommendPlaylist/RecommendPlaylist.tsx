import Playlist from 'components/common/Playlist/Playlist';
import * as S from './RecommendPlaylist.styles';

const RecommendPlaylist = () => {
  const mockPlaylist: SpotifyApi.PlaylistObjectSimplified = {
    collaborative: false,
    description: 'Set the mood for your romantic date night with some soft and cozy Jazz.',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX6ZiG5Dz8cUM',
    },
    href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX6ZiG5Dz8cUM',
    id: '37i9dQZF1DX6ZiG5Dz8cUM',
    images: [
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67706f0000000388e765bc2b31db5a148a35b2',
        width: 300,
      },
    ],
    name: 'Date Night Jazz',
    owner: {
      external_urls: {
        spotify: 'https://open.spotify.com/user/spotify',
      },
      href: 'https://api.spotify.com/v1/users/spotify',
      id: 'spotify',
      type: 'user',
      uri: 'spotify:user:spotify',
    },
    public: null,
    snapshot_id: 'MTY3NzE5MzI2MCwwMDAwMDAwMGNmNzkxMjNjYzdmNWFiYjdjYmU3Y2I0ZDViZGJiODhj',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX6ZiG5Dz8cUM/tracks',
      total: 144,
    },
    type: 'playlist',
    uri: 'spotify:playlist:37i9dQZF1DX6ZiG5Dz8cUM',
  };

  return (
    <S.Container>
      <S.Title>추천 플레이리스트</S.Title>
      <Playlist playlist={mockPlaylist} />
    </S.Container>
  );
};

export default RecommendPlaylist;
