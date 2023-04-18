import Image from 'next/image';
import { Seekbar } from 'react-seekbar';

interface VolumeBarProps {
  volume: number;
  onSeek: (volume: number) => void;
}

const VolumeBar = ({ volume, onSeek }: VolumeBarProps) => {
  const getVolumeSrc = (volume: number) => {
    if (volume === 0) return '/images/volume_mute.svg';
    if (volume > 0 && volume < 0.5) return '/images/volume_down.svg';
    if (volume >= 0.5) return '/images/volume_up.svg';
    return '';
  };

  return (
    <>
      <Image src={getVolumeSrc(volume)} alt="volume" width={24} height={24} />
      <Seekbar width={100} position={volume * 100} duration={100} onSeek={onSeek} height={7} />
    </>
  );
};

export default VolumeBar;
