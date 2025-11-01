'use client';
import { createContext, useContext, useState } from 'react';

const SchoolContext = createContext<any>(null);

export function SchoolProvider({ children }: any) {
  const [students, setStudents] = useState<any[]>([
    { id: 1, name: 'Ravi Kumar', class: '10-A' },
    { id: 2, name: 'Priya Sharma', class: '9-B' },
  ]);

  const [currentUser, setCurrentUser] = useState<any>({ id: 'local-admin', name: 'Local Admin', role: 'admin' });

  const addStudent = (student:any) => setStudents(prev => [...prev, { id: Date.now(), ...student }]);
  const updateStudent = (student:any) => setStudents(prev => prev.map(s => s.id === student.id ? student : s));
  const deleteStudent = (id:any) => setStudents(prev => prev.filter(s => s.id !== id));

  const loginAs = (role:any) => setCurrentUser({ id: Date.now().toString(), name: role === 'teacher' ? 'Demo Teacher' : role === 'student' ? 'Demo Student' : 'Local Admin', role });

  return (
    <SchoolContext.Provider value={{ students, addStudent, updateStudent, deleteStudent, currentUser, loginAs }}>
      {children}
    </SchoolContext.Provider>
  );
}

export function useSchool() {
  return useContext(SchoolContext);
}
