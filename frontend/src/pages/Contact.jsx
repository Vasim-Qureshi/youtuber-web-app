import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <div className="bg-gray-950 dark:bg-gray-900 min-h-screen px-6 py-20 text-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact — Focus The Future</title>
        <meta
          name="description"
          content="For collaborations, brand deals or inquiries, contact Focus The Future."
        />
        <link rel="canonical" href="https://yourwebsite.com/contact" />
        <meta property="og:title" content="Contact Focus The Future" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Focus The Future",
            "description": "Get in touch for business inquiries, brand collaborations, and sponsorships.",
            "url": "https://yourwebsite.com/contact",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Business",
              "email": "contact@yourwebsite.com",
              "availableLanguage": ["English", "Hindi"]
            }
          }
          `}
        </script>
      </Helmet>

      <h2 className="text-xl md:text-3xl font-bold mb-6">Contact Me</h2>

      <form className="max-w-xl mx-auto">
        <input className="w-full p-3 mb-4 rounded bg-gray-800" placeholder="Your Name" />
        <input className="w-full p-3 mb-4 rounded bg-gray-800" placeholder="Email" />
        <textarea className="w-full p-3 mb-4 rounded bg-gray-800" rows="5" placeholder="Message"></textarea>

        <button className="bg-red-600 px-6 py-3 rounded hover:bg-red-700">
          Send
        </button>
      </form>
    </div>
  );
}
