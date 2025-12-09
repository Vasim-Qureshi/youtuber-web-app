
export default function VideoCard({ title, thumbnail }) {
  return (
    <div className="bg-gray-800 dark:bg-gray-700 p-4 rounded-lg">
      <div className="bg-black h-40 rounded-lg">
        {/* Video thumbnail placeholder */}
        <img src={thumbnail} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>
      <h3 className="text-lg font-semibold mt-3">{title}</h3>
    </div>
  );
}
