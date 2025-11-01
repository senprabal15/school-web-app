export default function ClassesPage() {
  const classes = [
    { id: 1, name: "10-A", teacher: "Anita Desai" },
    { id: 2, name: "9-B", teacher: "Suresh Rao" },
  ];
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Classes</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {classes.map((c) => (
          <div key={c.id} className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">{c.name}</h3>
            <p className="text-sm text-gray-600">Teacher: {c.teacher}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
