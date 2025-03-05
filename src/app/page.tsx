import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Vitaj späť!</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Tvoj progres</h2>
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div className="bg-blue-500 h-6 rounded-full" style={{ width: "60%" }}></div>
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Odporúčané kurzy</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-medium">Kyberbezpečnosť</h3>
              <p>Začína 12.3.2025</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-medium">AI & Machine Learning</h3>
              <p>Začína 15.3.2025</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Kalendár akcií</h2>
          <p>📅 AI Workshop - 18.3.2025</p>
          <p>📅 Webinár o ChatGPT - 22.3.2025</p>
        </section>
      </main>
    </div>
  );
}