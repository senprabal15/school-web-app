"use client";
import { useState } from "react";
import { useSchool } from "@/lib/store";
import { motion } from "framer-motion";

export default function StudentForm({ existing, onClose }: any) {
  const { addStudent, updateStudent } = useSchool();
    const [name, setName] = useState(existing?.name || "");
      const [klass, setKlass] = useState(existing?.class || "");

        function handleSubmit(e: React.FormEvent) {
            e.preventDefault();

                if (existing) {
                      // ✅ correct: match TS type property "class"
                            updateStudent(existing.id, { name, class: klass });
                                } else {
                                      // ✅ create new student with "class"
                                            addStudent({
                                                    id: Date.now().toString(),
                                                            name,
                                                                    class: klass,
                                                                          });
                                                                              }

                                                                                  onClose?.();
                                                                                    }

                                                                                      return (
                                                                                          <motion.form
                                                                                                initial={{ opacity: 0, y: 8 }}
                                                                                                      animate={{ opacity: 1, y: 0 }}
                                                                                                            onSubmit={handleSubmit}
                                                                                                                  className="space-y-3"
                                                                                                                      >
                                                                                                                            <input
                                                                                                                                    value={name}
                                                                                                                                            onChange={(e) => setName(e.target.value)}
                                                                                                                                                    placeholder="Student Name"
                                                                                                                                                            className="w-full border p-2 rounded-xl"
                                                                                                                                                                  />

                                                                                                                                                                        <input
                                                                                                                                                                                value={klass}
                                                                                                                                                                                        onChange={(e) => setKlass(e.target.value)}
                                                                                                                                                                                                placeholder="Class"
                                                                                                                                                                                                        className="w-full border p-2 rounded-xl"
                                                                                                                                                                                                              />

                                                                                                                                                                                                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-xl w-full">
                                                                                                                                                                                                                            {existing ? "Save" : "Add Student"}
                                                                                                                                                                                                                                  </button>
                                                                                                                                                                                                                                      </motion.form>
                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                        }