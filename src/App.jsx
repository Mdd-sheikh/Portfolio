import React from "react";
import Login from "./components/Login";
import StudentDashboard from "./components/StudentDasboard";
import TeacherDashboard from "./components/TeacherDashboard";
import { Router,Routes,Route } from "react-router-dom";




const subjects = ['Math', 'Science', 'English', 'History', 'Art'];

const studentsData = [
  {
    id: 101,
    name: "Aadil",
    attendance: {
      Math: [1, 1, 0],
      Science: [1, 0],
      English: [1],
      History: [],
      Art: [1, 1]
    },
    password: "aadil123"
  },
  {
    id: 102,
    name: "Sara",
    attendance: {
      Math: [1],
      Science: [0, 1, 1],
      English: [],
      History: [1, 1],
      Art: []
    },
    password: "sara123"
  },
];

const teachersData = [
  { id: 1, name: "Mr. Smith", password: "smith123" },
  { id: 2, name: "Ms. Johnson", password: "johnson123" },
  { id: 3, name: "Mr. Khan", password: "khan123" },
  { id: 4, name: "Ms. Gupta", password: "gupta123" },
  { id: 5, name: "Mr. Roy", password: "roy123" },
];

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
      </Routes>
    
  );
}

export default App;

