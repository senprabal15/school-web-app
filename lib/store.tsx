"use client";
import React, { createContext, useContext, useState } from "react";

type Student = {
  id: string;
    name: string;
      class: string;
      };

      type User = {
        id: string;
          name: string;
            role: "admin" | "teacher" | "student" | null;
            };

            type SchoolContextType = {
              students: Student[];
                addStudent: (s: Student) => void;
                  updateStudent: (id: string, data: Partial<Student>) => void;
                    deleteStudent: (id: string) => void;
                      currentUser: User | null;
                        loginAs: (role: string) => void;
                        };

                        const SchoolContext = createContext<SchoolContextType | null>(null);

                        export const SchoolProvider = ({ children }: { children: React.ReactNode }) => {
                          const [students, setStudents] = useState<Student[]>([]);
                            const [currentUser, setCurrentUser] = useState<User | null>(null);

                              const addStudent = (student: Student) => setStudents([...students, student]);

                                const updateStudent = (id: string, data: Partial<Student>) =>
                                    setStudents(students.map(s => (s.id === id ? { ...s, ...data } : s)));

                                      const deleteStudent = (id: string) =>
                                          setStudents(students.filter(s => s.id !== id));

                                            const loginAs = (role: string) =>
                                                setCurrentUser({
                                                      id: Date.now().toString(),
                                                            name:
                                                                    role === "teacher"
                                                                              ? "Demo Teacher"
                                                                                        : role === "student"
                                                                                                  ? "Demo Student"
                                                                                                            : "Local Admin",
                                                                                                                  role: role as any,
                                                                                                                      });

                                                                                                                        return (
                                                                                                                            <SchoolContext.Provider
                                                                                                                                  value={{
                                                                                                                                          students,
                                                                                                                                                  addStudent,
                                                                                                                                                          updateStudent,
                                                                                                                                                                  deleteStudent,
                                                                                                                                                                          currentUser,
                                                                                                                                                                                  loginAs,
                                                                                                                                                                                        }}
                                                                                                                                                                                            >
                                                                                                                                                                                                  {children}
                                                                                                                                                                                                      </SchoolContext.Provider>
                                                                                                                                                                                                        );
                                                                                                                                                                                                        };

                                                                                                                                                                                                        export const useSchool = () => {
                                                                                                                                                                                                          const ctx = useContext(SchoolContext);
                                                                                                                                                                                                            if (!ctx) throw new Error("useSchool must be used inside SchoolProvider");
                                                                                                                                                                                                              return ctx;
                                                                                                                                                                                                              };