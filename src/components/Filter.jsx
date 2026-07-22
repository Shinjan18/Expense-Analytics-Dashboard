function Filter({ filter, setFilter, sort, setSort }) {
  return (
    <div className="grid grid-cols-1 gap-5 rounded-2xl border border-gray-800 bg-gray-900 p-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Filter
        </label>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-blue-500"
        >
          <option>All</option>
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Sort
        </label>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-blue-500"
        >
          <option>Newest</option>
          <option>Oldest</option>
          <option>Amount Low to High</option>
          <option>Amount High to Low</option>
        </select>
      </div>

    </div>
  );
}

export default Filter;