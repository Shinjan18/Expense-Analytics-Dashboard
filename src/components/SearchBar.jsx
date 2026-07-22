function SearchBar({ search, setSearch }) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
      <label className="mb-2 block text-sm font-medium text-gray-300">
        Search Transaction
      </label>

      <input
        type="text"
        placeholder="Search transaction by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
      />
    </div>
  );
}

export default SearchBar;