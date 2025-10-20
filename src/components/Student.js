import React from "react";
import { useParams,useNavigate} from "react-router-dom";

function Student() {
  const { name } = useParams();
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
    <h1>Welcome, {name}!</h1>
    <button onClick={() => navigate("/")}>Back to Student List</button>
    </div>
  );
}

export default Student;

