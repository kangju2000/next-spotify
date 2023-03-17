import styled from '@emotion/styled';

export interface TrackProps {
  track: SpotifyApi.RecommendationTrackObject;
}

const Track = ({ track }: TrackProps) => {
  const handleNameClick = () => {
    console.log(track.album);
  };

  const handleArtistClick = () => {
    console.log(track.artists[0].id);
  };

  return (
    <S.Container onClick={handleNameClick} url={track.album.images[1].url}>
      <S.Layer>
        <S.Name>{track.name}</S.Name>
        <S.Artist onClick={handleArtistClick}>{track.artists[0].name}</S.Artist>
      </S.Layer>
    </S.Container>
  );
};

const S = {
  Container: styled.div<{ url: string }>`
    position: relative;
    width: 230px;
    height: 230px;
    border-radius: 5px;
    background-image: url(${({ url }) => url});
    background-size: cover;
    cursor: pointer;
  `,
  Layer: styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    padding: 20px;
    border-radius: 0 0 5px 5px;
    background-color: rgba(0, 0, 0, 0.5);
  `,
  Name: styled.h2`
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  Artist: styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.lightgray};
  `,
};

export default Track;
