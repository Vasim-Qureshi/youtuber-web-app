// ----- DUMMY MODE -----
const DUMMY_API_KEY = "DUMMY_YT_API_KEY";
const CHANNEL_ID = "CHANNEL_12345";

// Fake Data
export const fetchChannelStats = async () => {
  return {
    subscribers: "778",
    views: "2,000",
    videos: 439,
  };
};

export const fetchLatestVideos = async () => {
  return [
    { id: 1, title: "Moghal-History-Part-1", thumbnail: "/tl-FocasTheFuture.jpg", link: "https://www.youtube.com/watch?v=qVu8OKBg5qw&list=PL8q8kYSih_ZVVvHFK7fe58H7feiTU4XWG&index=5" },
    { id: 2, title: "Moghal-History-Part-2", thumbnail: "/tl-FocasTheFuture-2.jpg", link: "https://www.youtube.com/watch?v=n_MNZ5u_OUA&list=PL8q8kYSih_ZVVvHFK7fe58H7feiTU4XWG&index=6" },
    { id: 3, title: "Moghal-History-Part-3", thumbnail: "/tl-FocasTheFuture-3.jpg", link: "" },
  ];
};
