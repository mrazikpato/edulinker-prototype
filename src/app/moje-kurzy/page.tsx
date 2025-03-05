import Sidebar from "@/components/Sidebar";

export default function MojeKurzy() {
  const myCourses = [
    { title: "Kyberbezpečnosť", progress: 80, date: "12.3.2025" },
    { title: "AI & Machine Learning", progress: 50, date: "15.3.2025" },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">🎓 Moje Kurzy</h1>

        <div className="space-y-4">
          {myCourses.map((course, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p>Začína: {course.date}</p>
              <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}