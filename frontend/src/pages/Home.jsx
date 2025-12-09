import { useEffect, useState } from "react";
import { fetchChannelStats, fetchLatestVideos } from "../utils/YoutubeAPI.js";
import StatsBox from "../components/StatsBox";
import VideoCard from "../components/VideoCard";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const [stats, setStats] = useState({});
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchChannelStats()
    .then(setStats);
    fetchLatestVideos()
    .then(setVideos);
  }, []);

  return (
    <div className="text-white">

      {/* SEO Meta Tags */}
      <Helmet>
        <title>Focus The Future — Official Website</title>
        <meta
          name="description"
          content="Tech reviews, vlogs, tutorials, and gadgets — watch latest videos and connect with Focus The Future."
        />
        <link rel="canonical" href="https://yourwebsite.com/" />
        <meta name="keywords" content="YouTube, Tech Reviews, Vlogs, Gadgets, Tutorials" />
        <meta property="og:title" content="Focas The Future — Tech Creator" />
        <meta property="og:description" content="Watch latest tech tutorials and gadget reviews." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourwebsite.com/thumbnail.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
          "@context": "https://schema.org",
          "@type": ["Person", "Organization"],
          "name": "Focus The Future",
          "url": "https://yourwebsite.com",
          "logo": "https://yourwebsite.com/logo.png",
          "image": "https://yourwebsite.com/banner.jpg",
          "description": "Tech YouTuber creating tutorials, gadget reviews, vlogs and tech content.",
          "sameAs": [
          "https://youtube.com/channel/CHANNEL_ID",
          "https://instagram.com/yourID",
          "https://twitter.com/yourID"
          ]
          }
        `}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gray-950 dark:bg-gray-900 text-center py-24 px-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Kasim Khan <span className="text-red-500 flex justify-center text-xl md:text-4xl">The Chief Editor Focus The Future</span>
        </h1>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto text-lg">
          Tech Reviews • Vlogs • Tutorials • Gadgets
          New videos every week!
        </p>

        <a
          href="#"
          className="mt-6 inline-block bg-red-600 px-6 py-3 rounded-lg text-lg hover:bg-red-700"
        >
          ▶ Subscribe Now
        </a>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-gray-900 dark:bg-gray-800 grid md:grid-cols-3 gap-6">
        <StatsBox label="Subscribers" value={stats.subscribers} />
        <StatsBox label="Total Views" value={stats.views} />
        <StatsBox label="Videos" value={stats.videos} />
      </section>

      {/* Videos */}
      <section className="py-12 px-6 bg-gray-950 dark:bg-gray-900">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Latest Videos</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v) => (
            <a target="_blank" rel="noopener noreferrer" href={v.link} key={v.id}>
              <VideoCard title={v.title} thumbnail={v.thumbnail} />
            </a>
          ))}
        </div>
      </section>
      <section className="py-12 px-6 bg-gray-950 dark:bg-gray-900">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">More Videos</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v) => (
            <a target="_blank" rel="noopener noreferrer" href={v.link} key={v.id}>
              <VideoCard title={v.title} thumbnail={v.thumbnail} />
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
