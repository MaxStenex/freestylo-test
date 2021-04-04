import React from "react";
import { Wrapper, List, Title } from "./styled";
import VideoCard from "../VideoCard";
import { videoType } from "../../../types";

type Props = {
  videos: videoType[];
  title: string;
};

const VideoCardList: React.FC<Props> = ({ videos, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <List>
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            imageSrc={video.imageUrl}
            title={video.title}
            href={video.videoUrl}
            id={video.id}
          />
        ))}
      </List>
    </Wrapper>
  );
};

export default VideoCardList;
