import React from "react";
import { useNavigate } from "react-router-dom";

const student = {
  name: "Aadil",
  roll: "10A-123",
  attendance: [1, 1, 0, 1, 1],
};

const StudentDashboard = () => {
  const navigate = useNavigate();
  const total = student.attendance.length;
  const present = student.attendance.filter((a) => a === 1).length;
  const percent = ((present / total) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-8">
      <nav className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <div>
          <button onClick={() => navigate("/profile")} className="mr-4">Profile</button>
          <button onClick={() => navigate("/help")} className="mr-4">Help</button>
          <button onClick={() => navigate("/")} className="text-red-500">Logout</button>
        </div>
      </nav>

      <div className="bg-white p-6 rounded-xl shadow-xl animate-fade-in">
        <h2 className="text-xl mb-4 font-semibold">Welcome, {student.name}</h2>
        <p><strong>Roll No:</strong> {student.roll}</p>
        <p><strong>Attendance:</strong> {percent}% ({present}/{total} days)</p>
      </div>
    </div>
  );
};

export default StudentDashboard;