import Sidebar from "@/components/Sidebar";

const events = [
  { title: "AI Workshop", date: "18.3.2025" },
  { title: "Webinár o ChatGPT", date: "22.3.2025" },
];

export default function Kalendar() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">📅 Kalendár akcií</h1>

        <ul className="space-y-4">
          {events.map((event, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded shadow">
              <h3 className="font-medium">{event.title}</h3>
              <p>📅 {event.date}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}