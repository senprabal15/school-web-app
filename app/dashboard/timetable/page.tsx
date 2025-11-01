export default function TimetablePage() {
  const timetable = [
    { day: 'Monday', schedule: 'Math, Science, English' },
    { day: 'Tuesday', schedule: 'History, PE, Art' },
  ];
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Timetable</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {timetable.map((t,i)=>(
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">{t.day}</h3>
            <p className="text-sm text-gray-600">{t.schedule}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
