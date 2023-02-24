import Image from 'next/image';
import * as S from './SearchInput.styles';

const SearchInput = ({ ...props }) => {
  return (
    <S.Container>
      <Image src="/images/search.svg" alt="Search" width={24} height={24} />
      <S.Input {...props} />
    </S.Container>
  );
};

export default SearchInput;
