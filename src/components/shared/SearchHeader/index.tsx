import React from "react";
import {
  Wrapper,
  FindButton,
  SearchInput,
  Link,
  Title,
  Links,
  Container,
} from "./styled";
import NextLink from "next/link";

type Props = {
  searchValue: string;
  changeSearchValue: (value: string) => void;
  onFindClick: (userName: string) => void;
};

const SearchHeader: React.FC<Props> = ({
  searchValue,
  changeSearchValue,
  onFindClick,
}) => {
  return (
    <Wrapper>
      <Container>
        <Title>Введите название канала</Title>
        <SearchInput
          value={searchValue}
          onChange={(e) => {
            changeSearchValue(e.target.value);
          }}
          placeholder="Название канала"
          type="text"
        />
        <FindButton
          onClick={() => {
            onFindClick(searchValue);
            changeSearchValue("");
          }}
        >
          Найти
        </FindButton>
        <Links>
          <NextLink href="/" passHref>
            <Link>Все</Link>
          </NextLink>
          <NextLink href="/favorites" passHref>
            <Link>Избранное</Link>
          </NextLink>
        </Links>
      </Container>
    </Wrapper>
  );
};

export default SearchHeader;
