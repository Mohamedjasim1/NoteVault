import { useState } from "react";
import { useNavigate,useLocation  } from "react-router-dom";
import '../App.css'

function Create() {

  const { state } = useLocation()
  const [title, setTitle] = useState(state?.title ?? '');
  const [description, setdescription] = useState(state?.description ?? '');
  const [modal, setmodal] = useState(false);

  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const temp = { title , description}; // Wrap in an object

    fetch("http://localhost:8080/notes/createNote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(temp),
      
       // Convert to JSON string
    })
    .then(() => navigate(`/${temp.title}`))
      .catch((error) => console.error("Error adding note:", error));
  };

    // console.log(temp)
  return (
    // <div className="containerCreate">

   
        
            <form className="CreateForm" onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
            />

            <textarea value={description}
                onChange={(e) => setdescription(e.target.value)}></textarea>
            <button type="submit">Add Note</button>
            </form>


    
    // </div>
    
    
  );
}

export default Create;


