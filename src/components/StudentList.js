import React from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentList() {
const students = ["Riya", "Karthika","Seniya", "Amaya","Alexai"];
const navigate = useNavigate();

return (
<div className="container mt-5 d-flex justify-content-center mx-auto">
<div className="card shadow text-center" style={{ width: '28rem' }}>
<div className="card-body">
<h2>Student List</h2>
<ul style={{ listStyleType: "none", padding: 0 }}> {students.map((name) => (
<li key={name} style={{ margin: "10px" }}>
<Link to={`/student/${name}`} style={{ textDecoration: "none", color: "green",
    backgroundColor:"#ead3d3ff",display:"block",padding:"8px",margin:"5px 45px",borderRadius:"5px"}}>{name}</Link>
</li>
))}
</ul>
<button onClick={() => navigate("/student/Riya")}>Default Student (Riya)</button>
</div>
</div>
</div>
);
}

export default StudentList;
