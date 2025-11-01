'use client';
import { useState } from 'react';

export default function ExamsPage() {
  const [results] = useState([
    { id:1, student: 'Ravi Kumar', subject: 'Math', marks: 85 },
    { id:2, student: 'Priya Sharma', subject: 'Science', marks: 92 },
  ]);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Exams & Results</h2>
      <div className="bg-white p-4 rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-100"><tr><th className="p-2">Student</th><th className="p-2">Subject</th><th className="p-2">Marks</th></tr></thead>
          <tbody>
            {results.map(r => (
              <tr key={r.id} className="border-t"><td className="p-2">{r.student}</td><td className="p-2">{r.subject}</td><td className="p-2">{r.marks}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
