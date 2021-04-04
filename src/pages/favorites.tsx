import { useEffect, useState } from "react";
import { api } from "../api";
import SearchHeader from "../components/shared/SearchHeader";
import VideoCardList from "../components/shared/VideoCardList";
import { videoType } from "../types";
import { setThumbUrl } from "../utils/setThumbUrl";
import { getStoragedVideoIds } from "../utils/storage";

export default function Favorites() {
  const [filter, setFilter] = useState("");
  const [videos, setVideos] = useState<videoType[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<videoType[]>([]);

  useEffect(() => {
    const storagedVideoIds: number[] | null = getStoragedVideoIds();
    const videoIdSet = new Set(storagedVideoIds);

    const fetchVideos = async () => {
      try {
        const stringIds = Array.from(videoIdSet).join(",");
        if (!stringIds) {
          return setVideos([]);
        }
        const { data: videosData } = await api.get(`/videos?id=${stringIds}`);

        return setVideos(
          videosData.data.map((v: any) => ({
            id: parseInt(v.id),
            imageUrl: setThumbUrl(v.thumbnail_url, 200, 200),
            videoUrl: v.url,
            title: v.title,
          }))
        );
      } catch (error) {}
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const filterVideos = async (filter: string) => {
      if (!filter) {
        return setFilteredVideos([...videos]);
      }

      const { data } = await api.get(`/search/channels?query=${filter}&first=1`);
      const streamerId = data.data[0].id;
      return setFilteredVideos(videos.filter((v) => v.userId === streamerId));
    };

    filterVideos(filter);
  }, [filter, videos]);

  return (
    <>
      <SearchHeader
        searchValue={filter}
        setSearchValue={setFilter}
        onFindClick={() => {}}
      />
      <VideoCardList title="Избранное" videos={filteredVideos} />
    </>
  );
}
