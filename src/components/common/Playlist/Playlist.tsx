import * as S from './Playlist.styles';

export interface PlaylistProps {
  playlist: SpotifyApi.PlaylistObjectSimplified;
}

const Playlist = ({ playlist }: PlaylistProps) => {
  return (
    <S.Container>
      <S.Thumbnail src={playlist.images[0].url} alt="플레이리스트 이미지" />
      <S.Info>
        <S.Name>{playlist.name}</S.Name>
        <S.Description>{playlist.description}</S.Description>
        <S.Button>바로가기</S.Button>
      </S.Info>
    </S.Container>
  );
};

export default Playlist;
