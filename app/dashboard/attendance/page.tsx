'use client';
import { useState } from 'react';

export default function AttendancePage() {
  const [date, setDate] = useState('');
  const students = [
    { id: 1, name: "Ravi Kumar" },
    { id: 2, name: "Priya Sharma" },
  ];
  const [marks, setMarks] = useState<any>({});

  function togglePresent(id:any) {
    setMarks((m:any) => ({ ...m, [id]: !m[id] }));
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Attendance</h2>
      <div className="mb-4">
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="border p-2 rounded-xl" />
      </div>
      <div className="bg-white p-4 rounded-xl shadow">
        {students.map((s)=>(
          <div key={s.id} className="flex items-center justify-between p-2 border-b">
            <div>{s.name}</div>
            <button onClick={()=>togglePresent(s.id)} className={`px-3 py-1 rounded-xl ${marks[s.id] ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
              {marks[s.id] ? 'Present' : 'Absent'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
