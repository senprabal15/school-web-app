'use client';
import { useState } from 'react';
import { useSchool } from '@/lib/store';
import StudentForm from './StudentForm';
import { motion } from 'framer-motion';

export default function StudentList() {
  const { students, deleteStudent } = useSchool();
  const [editing, setEditing] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Students</h3>
        <button onClick={() => { setEditing(null); setShowForm(true); }} className="px-3 py-1 rounded-xl bg-blue-600 text-white">+ New</button>
      </div>

      {showForm && (
        <div className="mb-4">
          <StudentForm existing={editing} onClose={() => setShowForm(false)} />
        </div>
      )}

      <motion.ul layout className="space-y-2">
        {students.map((s:any) => (
          <motion.li layout key={s.id} className="flex items-center justify-between p-2 border rounded-xl">
            <div>
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-gray-500">{s.class}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => { setEditing(s); setShowForm(true); }} className="px-3 py-1 rounded-xl border">Edit</button>
              <button onClick={() => deleteStudent(s.id)} className="px-3 py-1 rounded-xl bg-red-500 text-white">Delete</button>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
