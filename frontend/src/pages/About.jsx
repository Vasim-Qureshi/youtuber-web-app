import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div className="bg-gray-950 dark:bg-gray-900 text-white min-h-screen px-6 py-20">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About — Focus The Future</title>
        <meta
          name="description"
          content="Learn more about Focus The Future — a tech creator making videos on gadgets, tutorials & reviews."
        />
        <link rel="canonical" href="https://yourwebsite.com/about" />
        <meta property="og:title" content="About Focus The Future" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Focus The Future",
          "url": "https://yourwebsite.com/about",
          "jobTitle": "YouTube Content Creator",
          "worksFor": {
            "@type": "Organization",
          "name": "Focus The Future Official"
          },
          "description": "Tech YouTuber specializing in gadgets, reviews, tech tutorials, editing, and vlogs.",
          "knowsAbout": [
          "Tech Gadgets",
          "Video Editing",
          "Cameras",
          "YouTube Growth",
          "Mobile Phones"
          ],
          "sameAs": [
          "https://youtube.com/channel/CHANNEL_ID",
          "https://instagram.com/yourID"
          ]
          }
        `}
        </script>
      </Helmet>

      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-gray-300 max-w-3xl text-lg">
        I am a tech YouTuber who loves creating content about gadgets, software,
        editing, and technology. My goal is to help people learn tech easily.
      </p>
    </div>
  );
}
