import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import ROUTES from 'constants/routes';

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

const S = {
  Container: styled.div`
    display: flex;
    width: 550px;
    height: 300px;
    padding: 20px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.darkgray};
  `,

  Thumbnail: styled.img`
    border-radius: 5px;
  `,

  Info: styled.div`
    position: relative;
    width: 100%;
    margin-left: 10px;
  `,

  Name: styled.h2`
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 700;
  `,

  Description: styled.p`
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.lightgray};
  `,

  Button: styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 130px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  `,
};

export default Playlist;
