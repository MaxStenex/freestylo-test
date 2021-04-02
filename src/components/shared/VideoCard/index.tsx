import React from "react";
import { Wrapper, Image, InfoWrapper, Title, InfoWrapperBg } from "./styled";

type Props = {
  imageSrc: string;
  title: string;
  href: string;
};

const VideoCard: React.FC<Props> = ({ imageSrc, title, href }) => {
  return (
    <Wrapper href={href} target="_blank">
      <Image src={imageSrc} alt="#" />
      <InfoWrapper>
        <InfoWrapperBg>
          <Title>{title}</Title>
        </InfoWrapperBg>
      </InfoWrapper>
    </Wrapper>
  );
};

export default VideoCard;
