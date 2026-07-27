import SearchBar from "../SearchBar/SearchBar";

interface NavBarProps {}

export default function NavBar() {
  return (
    <div>
      <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <h1>THIS IS NAVBAR</h1>
        <SearchBar />
      </nav>
    </div>
  );
}
