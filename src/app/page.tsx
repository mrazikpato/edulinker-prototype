"use client";

import { useState } from "react";
import Link from "next/link";

const HomePage = () => {
  // Placeholder hodnoty – neskôr nahradíme skutočnými dátami
  const [searchQuery, setSearchQuery] = useState("");
  const [stats, setStats] = useState({
    vDohadovani: 2,
    dohodnute: 5,
    uskutocnene: 8,
    celkovo: 15,
  });

  const recommendedCourses = [
    { id: 1, name: "Kyberbezpečnosť", startDate: "12.3.2025" },
    { id: 2, name: "AI & Machine Learning", startDate: "15.3.2025" },
  ];

  const upcomingEvents = [
    { id: 1, name: "AI Workshop", date: "18.3.2025" },
    { id: 2, name: "Webinár o ChatGPT", date: "22.3.2025" },
  ];

  return (
    <div className="flex h-screen">
      {/* Leftbar (Bočný panel) */}
      <aside className="w-64 bg-blue-900 text-white p-4">
        <h1 className="text-xl font-bold mb-6">EduLinker</h1>
        <nav>
          <ul className="space-y-2">
            <li><Link href="/" className="block p-2 hover:bg-blue-700">🏠 Domov</Link></li>
            <li><Link href="/katalog" className="block p-2 hover:bg-blue-700">📚 Katalóg</Link></li>
            <li><Link href="/moje-kurzy" className="block p-2 hover:bg-blue-700">🎓 Moje Kurzy</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-900 text-white p-6">
        {/* Topbar (Vyhľadávanie + štatistiky) */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Vyhľadať..."
            className="p-2 rounded w-1/3 text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Štatistiky */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="bg-gray-800 p-4 rounded text-center">
              <h3 className="text-xl font-bold">{value}</h3>
              <p className="text-gray-400">{key}</p>
            </div>
          ))}
        </div>

        {/* Prehľad mojich kurzov */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2">📋 Prehľad mojich kurzov</h2>
          <div className="bg-gray-800 p-4 rounded">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left">Názov prednášky</th>
                  <th className="text-left">Lektor</th>
                  <th className="text-left">Realizácia</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td>Kyberbezpečnosť</td>
                  <td>Joe Doe</td>
                  <td>11.11.-13.11.2024</td>
                </tr>
                <tr className="border-b">
                  <td>AI & ML</td>
                  <td>Jane Smith</td>
                  <td>05.05.-07.05.2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Odporúčané školenia */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2">📌 Odporúčané školenia</h2>
          <div className="grid grid-cols-2 gap-4">
            {recommendedCourses.map((course) => (
              <div key={course.id} className="bg-gray-800 p-4 rounded">
                <h3 className="text-md font-bold">{course.name}</h3>
                <p className="text-gray-400">Začína: {course.startDate}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Najbližšie udalosti */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2">📅 Najbližšie udalosti</h2>
          <ul className="bg-gray-800 p-4 rounded">
            {upcomingEvents.map((event) => (
              <li key={event.id} className="border-b last:border-none p-2">
                <span className="text-md">{event.name}</span> - <span className="text-gray-400">{event.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HomePage;