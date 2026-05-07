function SearchBar({ val, onUpdate }) {
  return (
    <div className="mb-8">
      <input 
        type="text" 
        placeholder="Search projects by title..." 
        className="w-full p-4 rounded-2xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
        value={val} 
        onChange={(e) => onUpdate(e.target.value)} 
      />
    </div>
  );
}
export default SearchBar;