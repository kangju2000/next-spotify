import styled from '@emotion/styled';
import SearchInput from './SearchInput';
import User from './User';

const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <SearchInput />
      </S.Wrapper>
      <User />
    </S.Container>
  );
};

const S = {
  Container: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    margin-bottom: 20px;
  `,
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    min-width: 260px;

    > :first-child {
      margin-right: 20px;
    }
  `,
};

export default Header;
