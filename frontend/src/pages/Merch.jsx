import { Helmet } from "react-helmet-async";

export default function Merch() {
  return (
    <div className="bg-gray-950 dark:bg-gray-900 min-h-screen text-white px-6 py-20">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Official Merch — Focus The Future</title>
        <meta
          name="description"
          content="Buy official merchandise like t-shirts, hoodies & accessories from Focus The Future."
        />
        <link rel="canonical" href="https://yourwebsite.com/merch" />
        <meta property="og:title" content="Official YouTuber Merch" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Official YouTuber Merch",
            "itemListElement": [
              {
                "@type": "Product",
                "name": "Official T-Shirt",
                "image": "https://yourwebsite.com/merch/tshirt.jpg",
                "offers": {
                  "@type": "Offer",
                  "price": "799",
                  "priceCurrency": "INR",
                  "availability": "InStock"
                }
              },
              {
                "@type": "Product",
                "name": "Official Cap",
                "image": "https://yourwebsite.com/merch/cap.jpg",
                "offers": {
                  "@type": "Offer",
                  "price": "499",
                  "priceCurrency": "INR",
                  "availability": "InStock"
                }
              },
              {
                "@type": "Product",
                "name": "Official Hoodie",
                "image": "https://yourwebsite.com/merch/hoodie.jpg",
                "offers": {
                  "@type": "Offer",
                  "price": "1299",
                  "priceCurrency": "INR",
                  "availability": "InStock"
                }
              }
            ]
          }
          `}
        </script>
      </Helmet>

      <h2 className="text-4xl font-bold mb-10">Official Merch by Focus The Future</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="h-40 bg-black rounded"></div>
          <p className="mt-4">T-Shirt — ₹799</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="h-40 bg-black rounded"></div>
          <p className="mt-4">Cap — ₹499</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="h-40 bg-black rounded"></div>
          <p className="mt-4">Hoodie — ₹1299</p>
        </div>
      </div>
    </div>
  );
}
