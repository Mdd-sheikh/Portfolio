import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialStudents = [
  { id: 1, name: "Aadil", present: true },
  { id: 2, name: "Sara", present: false },
  { id: 3, name: "Raj", present: true },
];

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState(initialStudents);

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, present: !s.present } : s))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <nav className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
        <button onClick={() => navigate("/")} className="text-red-500">Logout</button>
      </nav>

      <div className="bg-white p-6 rounded-xl shadow-xl animate-fade-in">
        <h2 className="text-xl mb-4 font-semibold">Mark Attendance</h2>
        {students.map((student) => (
          <div key={student.id} className="flex justify-between items-center mb-2">
            <p>{student.name}</p>
            <input
              type="checkbox"
              checked={student.present}
              onChange={() => toggleAttendance(student.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;