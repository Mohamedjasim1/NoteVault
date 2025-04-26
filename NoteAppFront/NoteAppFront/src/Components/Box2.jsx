import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Box2() {
  
  const navigate=useNavigate();
  const handle=()=>{
    navigate("/add");
  }


  return (
    <div className="Box1" onClick={handle}>
      <h1>+ Add Note</h1>
    </div>
    
  );
}

export default Box2;


{/* <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <button type="submit">Add Note</button>
    </form> */}