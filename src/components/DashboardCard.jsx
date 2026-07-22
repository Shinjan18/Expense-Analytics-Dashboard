function DashboardCard({ title, amount, color }) {
  return (
    <div
      className={`rounded-2xl bg-gray-900 border border-gray-800 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${color}`}
    >
      <p className="text-gray-400 text-lg">{title}</p>

      <h2 className="mt-4 text-4xl font-bold text-white">
        ₹ {amount.toLocaleString()}
      </h2>
    </div>
  );
}

export default DashboardCard;