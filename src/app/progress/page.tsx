import Sidebar from "@/components/Sidebar";

export default function Progress() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">🏆 Môj Pokrok</h1>

        <div className="bg-gray-100 p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">🔹 Odznaky</h2>
          <p>🏅 Začiatočník AI</p>
          <p>🏅 Expert na Kyberbezpečnosť</p>
        </div>

        <div className="bg-gray-100 p-6 rounded shadow mt-6">
          <h2 className="text-lg font-semibold mb-2">📜 Certifikáty</h2>
          <p>✅ Kyberbezpečnosť – 2025</p>
          <p>✅ AI & ML – 2025</p>
        </div>
      </main>
    </div>
  );
}