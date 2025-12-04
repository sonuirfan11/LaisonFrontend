export default function Sidebar() {
  return (
    <aside className="bg-gray-100 w-64 p-4 border-r">
      <nav className="space-y-2">
        <a href="#" className="block p-2 hover:bg-gray-200 rounded">Home</a>
        <a href="#" className="block p-2 hover:bg-gray-200 rounded">About</a>
        <a href="#" className="block p-2 hover:bg-gray-200 rounded">Services</a>
        <a href="#" className="block p-2 hover:bg-gray-200 rounded">Contact</a>
      </nav>
    </aside>
  );
}
