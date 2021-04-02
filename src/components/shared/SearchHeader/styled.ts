import styled from "styled-components";

export const Wrapper = styled.header`
  border: 1px solid #ccc;
  width: 100%;
  background-color: #e2e2e2;
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 400;
  margin-right: 10px;
`;

export const SearchInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  outline: none;
  border: none;
  flex: 1;
  margin-right: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  &:focus {
    border: 1px solid blue;
  }
`;

export const FindButton = styled.button`
  padding: 8px 25px;
  border-radius: 5px;
  border: 2px solid green;
  background-color: green;
  color: #fff;
  outline: none;
  margin-right: 40px;
  font-weight: 700;
  cursor: pointer;
  &:hover,
  &:focus {
    transition: 0.25s;
    background-color: #fff;
    color: green;
  }
`;

export const Links = styled.div``;

export const Link = styled.a`
  cursor: pointer;
  margin-right: 13px;
  font-size: 14px;
  text-decoration: none;
  color: black;
  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;
