import { useRouter } from 'next/router';
import ROUTES from 'constants/routes';
import * as S from './Playlist.styles';

export interface PlaylistProps {
  playlist: SpotifyApi.PlaylistObjectSimplified;
}

const Playlist = ({ playlist }: PlaylistProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.PLAYLIST(playlist.id));
  };

  return (
    <S.Container>
      <S.Thumbnail src={playlist.images[0].url} alt="플레이리스트 이미지" />
      <S.Info>
        <S.Name>{playlist.name}</S.Name>
        <S.Description
          dangerouslySetInnerHTML={{ __html: playlist.description ?? '' }}
        ></S.Description>
        <S.Button onClick={handleClick}>바로가기</S.Button>
      </S.Info>
    </S.Container>
  );
};

export default Playlist;
