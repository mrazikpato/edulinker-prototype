import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4">EduLinker</h2>
      <nav className="flex flex-col gap-2">
        <Link href="/" className="p-2 hover:bg-gray-700 rounded">🏠 Domov</Link>
        <Link href="/moje-kurzy" className="p-2 hover:bg-gray-700 rounded">🎓 Moje kurzy</Link>
        <Link href="/katalog" className="p-2 hover:bg-gray-700 rounded">📚 Katalóg</Link>
        <Link href="/progress" className="p-2 hover:bg-gray-700 rounded">🏆 Pokrok</Link>
        <Link href="/kalendar" className="p-2 hover:bg-gray-700 rounded">📅 Kalendár</Link>
        <Link href="/kurz-detail" className="p-2 hover:bg-gray-700 rounded">📖 Detail Kurzu</Link>
        <Link href="/objednavky" className="p-2 hover:bg-gray-700 rounded">🛒 Objednávky</Link>
      </nav>
    </aside>
  );
}