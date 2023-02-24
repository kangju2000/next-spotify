import * as S from './Playlist.styles';

export interface PlaylistProps {
  playlist: SpotifyApi.PlaylistBaseObject;
}

const Playlist = ({ playlist }: PlaylistProps) => {
  return (
    <S.Container>
      <S.PLImage src={playlist.images[0].url} />
      <S.PLInfo>
        <S.PLName>{playlist.name}</S.PLName>
        <S.PLDescription>{playlist.description}</S.PLDescription>
        <S.PLButton>바로가기</S.PLButton>
      </S.PLInfo>
    </S.Container>
  );
};

export default Playlist;
