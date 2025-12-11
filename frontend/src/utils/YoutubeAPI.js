import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_HANDLE = "@focusthefuture";

// Cache
let CACHED_CHANNEL_ID = null;
let NEXT_PAGE_TOKEN = null;

// 1️⃣ FETCH CHANNEL STATS
export const fetchChannelStats = async () => {
  try {
    // Resolve channel ID
    if (!CACHED_CHANNEL_ID) {
      CACHED_CHANNEL_ID = await resolveHandleToChannelId(CHANNEL_HANDLE);
    }

    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/channels",
      {
        params: {
          part: "snippet,statistics",
          id: CACHED_CHANNEL_ID,
          key: API_KEY,
        },
      }
    );

    if (!response.data.items || response.data.items.length === 0) {
      throw new Error("Channel stats not found");
    }

    const stats = response.data.items[0].statistics;

    return {
      subscribers: stats.subscriberCount,
      views: stats.viewCount,
      videos: stats.videoCount,
    };
  } catch (error) {
    console.error("Error fetching channel stats:", error);
    return { subscribers: "0", views: "0", videos: 0 };
  }
};


// Resolve handle → channelId
const resolveHandleToChannelId = async (handle) => {
  const clean = handle.replace("@", "");

  const res = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        part: "snippet",
        q: clean,
        type: "channel",
        maxResults: 1,
        key: API_KEY,
      },
    }
  );

  if (!res.data.items?.length) {
    throw new Error("Channel not found for handle: " + handle);
  }

  return res.data.items[0].id.channelId;
};

// 1️⃣ Fetch first 20 videos
export const fetchLatestVideos = async () => {
  try {
    if (!CACHED_CHANNEL_ID) {
      CACHED_CHANNEL_ID = await resolveHandleToChannelId(CHANNEL_HANDLE);
    }

    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          channelId: CACHED_CHANNEL_ID,
          type: "video",
          order: "date",
          maxResults: 20,
          key: API_KEY,
        },
      }
    );

    // Save next page token for pagination
    NEXT_PAGE_TOKEN = res.data.nextPageToken || null;

    return res.data.items.map((video) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.high.url,
      link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      publishedAt: video.snippet.publishedAt,
    }));
  } catch (err) {
    console.error("Error fetching videos:", err);
    return [];
  }
};

// 2️⃣ Fetch more videos (ignore first 20)
export const fetchMoreVideos = async () => {
  try {
    if (!CACHED_CHANNEL_ID) {
      CACHED_CHANNEL_ID = await resolveHandleToChannelId(CHANNEL_HANDLE);
    }

    // If no nextPageToken → no more videos
    if (!NEXT_PAGE_TOKEN) return [];

    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          channelId: CACHED_CHANNEL_ID,
          type: "video",
          order: "date",
          maxResults: 20,
          pageToken: NEXT_PAGE_TOKEN,
          key: API_KEY,
        },
      }
    );

    // Update next page
    NEXT_PAGE_TOKEN = res.data.nextPageToken || null;

    return res.data.items.map((video) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.high.url,
      link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      publishedAt: video.snippet.publishedAt,
    }));
  } catch (err) {
    console.error("Error fetching more videos:", err);
    return [];
  }
};
