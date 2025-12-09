import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <div className="bg-gray-950 dark:bg-gray-900 text-white min-h-screen px-6 py-20">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Brand Deals & Collaboration — Focas The Future</title>
        <meta
          name="description"
          content="Work with Focus The Future for brand promotions, product reviews, and sponsorship opportunities."
        />
        <link rel="canonical" href="https://yourwebsite.com/services" />
        <meta property="og:title" content="Work With Me — Focus The Future" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Brand Promotion, Product Review, Collaboration",
          "provider": {
          "@type": "Person",
          "name": "Focus The Future"
           },
          "areaServed": "Worldwide",
          "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://yourwebsite.com/services"
            },
          "offers": [
          {
          "@type": "Offer",
          "name": "Brand Promotion",
          "description": "Sponsored brand promotion on YouTube and social media.",
          "priceCurrency": "INR",
          "price": "0"
          },
          {
          "@type": "Offer",
          "name": "Product Review",
          "description": "Honest gadget reviews on YouTube channel.",
          "priceCurrency": "INR",
          "price": "0"
          },
          {
          "@type": "Offer",
          "name": "Instagram Reels Promotion",
          "description": "Short promotional reels for brands.",
          "priceCurrency": "INR",
          "price": "0"
          }
          ]
        }
        `}
        </script>
      </Helmet>

      <h2 className="text-4xl font-bold mb-10">Work With Me</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Brand Promotion</h3>
          <p className="text-gray-400">Sponsored videos for your product.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Product Review</h3>
          <p className="text-gray-400">Honest and detailed reviews.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Instagram Reels</h3>
          <p className="text-gray-400">Short format promotional reels.</p>
        </div>
      </div>
    </div>
  );
}
