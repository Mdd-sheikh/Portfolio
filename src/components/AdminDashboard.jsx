import React from 'react';

const AdminDashboard = ({ students, setStudents }) => {
  const today = new Date().getDate(); // Simulate daily attendance log

  const toggleAttendance = (id) => {
    setStudents(prev =>
      prev.map(student =>
        student.id === id ? { ...student, attendance: [...student.attendance, 1] } : student
      )
    );
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Total Students: {students.length}</p>
      <div className="mt-4">
        {students.map(student => (
          <div key={student.id} className="flex justify-between items-center bg-white p-4 rounded-xl shadow mb-2">
            <div>{student.name} (ID: {student.id})</div>
            <button onClick={() => toggleAttendance(student.id)} className="bg-green-500 text-white px-4 py-1 rounded-xl hover:bg-green-600">
              Mark Present
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;