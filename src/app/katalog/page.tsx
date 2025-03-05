import Sidebar from "@/components/Sidebar";

const courses = [
  { title: "Kyberbezpečnosť", rating: 4.5, price: "49€" },
  { title: "AI & Machine Learning", rating: 4.8, price: "59€" },
  { title: "Data Science", rating: 4.7, price: "69€" },
];

export default function Katalog() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">📚 Katalóg kurzov</h1>

        <div className="grid grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p>⭐ {course.rating} | 💰 {course.price}</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Detail</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}