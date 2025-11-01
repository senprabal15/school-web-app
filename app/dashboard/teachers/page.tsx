export default function TeachersPage() {
  const teachers = [
    { id: 1, name: "Anita Desai", subject: "Math" },
    { id: 2, name: "Suresh Rao", subject: "Science" },
  ];
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Teachers</h2>
      <table className="w-full bg-white rounded-xl shadow">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Subject</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((t) => (
            <tr key={t.id} className="border-t">
              <td className="p-2">{t.id}</td>
              <td className="p-2">{t.name}</td>
              <td className="p-2">{t.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
