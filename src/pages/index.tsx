import VideoCardList from "../components/shared/VideoCardList";
import SearchHeader from "../components/shared/SearchHeader";
import { useState } from "react";
import { api } from "../api";
import { videoType } from "../types";
import { setThumbUrl } from "../utils/setThumbUrl";

export default function Home() {
  const [filter, setFilter] = useState("");

  const [videos, setVideos] = useState<videoType[]>([]);
  const fetchVideos = async (userName: string) => {
    try {
      if (userName.trim().length > 0) {
        // Для получения видео необходим айди стримера
        const { data } = await api.get(`/search/channels?query=${userName}&first=1`);
        const streamerId = data.data[0].id;

        const { data: videosData } = await api.get(`/videos?user_id=${streamerId}`);
        setVideos(
          videosData.data.map((v: any) => ({
            id: parseInt(v.id),
            imageUrl: setThumbUrl(v.thumbnail_url, 200, 200),
            videoUrl: v.url,
            title: v.title,
            userId: parseInt(v.user_id),
          }))
        );
      }
    } catch (error) {}
  };

  return (
    <>
      <SearchHeader
        searchValue={filter}
        setSearchValue={setFilter}
        onFindClick={fetchVideos}
      />
      <VideoCardList title="Все видео" videos={videos} />
    </>
  );
}
