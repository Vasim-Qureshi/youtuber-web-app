import { Helmet } from "react-helmet-async";

export default function Blog() {
  return (
    <div className="bg-gray-930 dark:bg-gray-900 text-white min-h-screen px-6 py-20">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Blog — Focus The Future</title>
        <meta
          name="description"
          content="Read blogs on cameras, gadgets, editing tips, creator tools and more."
        />
        <link rel="canonical" href="https://yourwebsite.com/blog" />
        <meta property="og:title" content="Blog by Focus The Future" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
          "@context": "https://schema.org",
          "@type": "Blog",
          "headline": "Tech & Creator Blog",
          "description": "Blogs on gadgets, cameras, editing tips, YouTube growth and creator tools.",
          "url": "https://yourwebsite.com/blog",
          "creator": {
          "@type": "Person",
          "name": "Focus The Future"
           }
          }
          `}
        </script>
        <script type="application/ld+json">
          {`
          {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Best Camera for YouTubers",
          "description": "Camera buying guide for YouTube creators.",
          "author": {
          "@type": "Person",
          "name": "Focus The Future"
          },
          "datePublished": "2025-01-01",
          "image": "https://yourwebsite.com/blog/camera.jpg"
        }
        `}
        </script>
      </Helmet>

      <h2 className="text-4xl font-bold mb-8">Blogs</h2>

      <div className="bg-gray-800 p-6 rounded-lg mb-4">
        <h3 className="text-xl font-semibold">Best Camera for YouTubers</h3>
        <p className="text-gray-400 mt-2">A complete camera buying guide...</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-4">
        <h3 className="text-xl font-semibold">Budget Lighting Setup</h3>
        <p className="text-gray-400 mt-2">How to build studio lighting...</p>
      </div>
    </div>
  );
}
