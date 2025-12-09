export default function StatsBox({ label, value }) {
  return (
    <div className="bg-gray-800 dark:bg-gray-700 p-6 rounded-lg text-center">
      <h2 className="text-3xl font-bold">{value}</h2>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}
