export function Sidebar() {
  return (
    <div className="mt-14 w-3xs h-screen text-primary border-r-2 border-border p-4 fixed top-0 left-0 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
      <ul className="space-y-2">
        <li>
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">
            Profile
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">
            Settings
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
