import React from "react";
import { Wrapper, List } from "./styled";
import VideoCard from "../VideoCard";
import { videoType } from "../../../types";

type Props = {
  videos: videoType[];
};

const VideoCardList: React.FC<Props> = ({ videos }) => {
  return (
    <Wrapper>
      <List>
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            imageSrc={video.imageUrl}
            title={video.title}
            href={video.videoUrl}
          />
        ))}
      </List>
    </Wrapper>
  );
};

export default VideoCardList;
