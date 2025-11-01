export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-blue-600">Admin Dashboard</h1>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-gray-700">Total Students</h2>
          <p className="text-3xl font-bold text-blue-600">450</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-gray-700">Total Teachers</h2>
          <p className="text-3xl font-bold text-green-600">32</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-gray-700">Total Classes</h2>
          <p className="text-3xl font-bold text-purple-600">18</p>
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Activity</h2>
        <ul className="space-y-2 text-gray-600">
          <li>📌 New student registered</li>
          <li>📌 Teacher attendance updated</li>
          <li>📌 Class timetable updated</li>
        </ul>
      </section>
    </main>
  );
}
