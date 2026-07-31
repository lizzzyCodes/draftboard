import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
      <input
        type="text"
        placeholder="Search prospects..."
        className="w-full rounded-full bg-slate-900/60 border border-slate-700/50 py-4 pl-12 pr-4 text-slate-200 placeholder:text-slate-500 outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-colors"
      />
    </div>
  );
}
