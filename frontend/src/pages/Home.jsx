import { useEffect, useRef, useState, useCallback } from "react";
import {
  fetchChannelStats,
  fetchLatestVideos,
  fetchMoreVideos,
} from "../utils/YoutubeAPI.js";
import StatsBox from "../components/StatsBox";
import VideoCard from "../components/VideoCard";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const [stats, setStats] = useState({});
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // assume more until fetchMore returns []
  const observerRef = useRef(null); // store IntersectionObserver
  const sentinelRef = useRef(null); // sentinel element ref

  // load initial data
  useEffect(() => {
    let mounted = true;
    const init = async () => {
      try {
        setLoading(true);
        const [s, initial] = await Promise.all([
          fetchChannelStats().catch((e) => {
            console.error("stats error", e);
            return {};
          }),
          fetchLatestVideos().catch((e) => {
            console.error("initial videos error", e);
            return [];
          }),
        ]);
        if (!mounted) return;
        setStats(s);
        setVideos(initial || []);
        // If initial returned fewer than requested (20) AND fetchMoreVideos returns [], we may set hasMore false only when fetchMore returns [] later.
        // keep hasMore true for now (unless initial is empty)
        if (!initial || initial.length === 0) setHasMore(false);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    init();
    return () => {
      mounted = false;
    };
  }, []);

  // callback to load more videos (append)
  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const more = await fetchMoreVideos();
      if (!more || more.length === 0) {
        setHasMore(false);
        return;
      }
      // append new videos, avoid duplicates by id
      setVideos((prev) => {
        const ids = new Set(prev.map((v) => v.id));
        const filtered = more.filter((v) => !ids.has(v.id));
        return [...prev, ...filtered];
      });
    } catch (err) {
      console.error("Error loading more videos:", err);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore]);

  // intersection observer setup (observe sentinel)
  useEffect(() => {
    if (!sentinelRef.current) return;

    // create observer only once
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // sentinel visible -> load more
            loadMore();
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "200px", // start loading a bit earlier
        threshold: 0.1,
      }
    );

    const currentObserver = observerRef.current;
    const currentSentinel = sentinelRef.current;
    currentObserver.observe(currentSentinel);

    return () => {
      if (currentObserver && currentSentinel) {
        currentObserver.unobserve(currentSentinel);
        currentObserver.disconnect();
      }
    };
  }, [loadMore]);

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
        <meta property="og:title" content="Focus The Future — Tech Creator" />
        <meta property="og:description" content="Watch latest tech tutorials and gadget reviews." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourwebsite.com/thumbnail.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/" />
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
          Kasim Khan{" "}
          <span className="text-red-500 flex justify-center text-xl md:text-4xl">
            The Chief Editor Focus The Future
          </span>
        </h1>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto text-lg">
          Tech Reviews • Vlogs • Tutorials • Gadgets
          New videos every week!
        </p>

        <a href="#" className="mt-6 inline-block bg-red-600 px-6 py-3 rounded-lg text-lg hover:bg-red-700">
          ▶ Subscribe Now
        </a>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-gray-900 dark:bg-gray-800 grid md:grid-cols-3 gap-6">
        <StatsBox label="Subscribers" value={stats.subscribers ?? "0"} />
        <StatsBox label="Total Views" value={stats.views ?? "0"} />
        <StatsBox label="Videos" value={stats.videos ?? 0} />
      </section>

      {/* Videos */}
      <section className="py-12 px-6 bg-gray-950 dark:bg-gray-900">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">All Videos</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v) => (
            <a target="_blank" rel="noopener noreferrer" href={v.link} key={v.id}>
              <VideoCard title={v.title} thumbnail={v.thumbnail} />
            </a>
          ))}
        </div>

        {/* Sentinel — observed by IntersectionObserver for infinite scroll */}
        <div ref={sentinelRef} className="w-full h-12 flex items-center justify-center mt-8">
          {loading ? (
            <div className="text-gray-300">Loading more videos…</div>
          ) : hasMore ? (
            <div className="text-gray-400">Scroll to load more</div>
          ) : (
            <div className="text-gray-500">No more videos</div>
          )}
        </div>
      </section>
    </div>
  );
}
