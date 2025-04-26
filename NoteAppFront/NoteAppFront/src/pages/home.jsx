import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import NavBar from '../Components/NavBar';

import '../App.css'
import Box from '../Components/Box';
import Box2 from '../Components/Box2';

function Home() {
  const [notes, setNotes] = useState([]);
  const [flag, setFlag] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeBox, setActiveBox] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/notes/");
        const data = await response.json();
        setNotes(data)
        setFlag(true)
      } catch (error) {
        console.error("hello " + error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar/>
      <div className="container">
        {flag && (
          <div className="Boxes">
            {notes.map((d, idx) => (
              <Box
                key={idx}
                name={d}
                type={0}
                activeBox={activeBox}        
                setActiveBox={setActiveBox}  
              />
            ))}
            <Box2 />
          </div>
        )}
      </div>
    </>
  );
}

export default Home
