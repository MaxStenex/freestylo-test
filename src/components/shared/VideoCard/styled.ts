import styled from "styled-components";

export const Wrapper = styled.a`
  display: block;
  flex: 0 0 32%;
  height: 200px;
  margin-bottom: 25px;
  margin-right: calc(900px / 100 * 2);
  position: relative;
  &:nth-child(3n) {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 100%;
  opacity: 0;

  &:hover {
    transition: 0.3s;
    opacity: 1;
  }
`;

export const InfoWrapperBg = styled.div`
  width: 100%;
  background-color: #000;
  height: 100%;
  opacity: 0;
  z-index: 20;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }
`;

export const Title = styled.h3`
  word-break: normal;
  font-size: 16px;
  color: #fff;
`;
