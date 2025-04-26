import { useState ,useEffect} from 'react'
import { useParams, useNavigate, data } from "react-router-dom";



import '../App.css'




function Content() {

 

  const { title } = useParams();
  const navigate=useNavigate();
  const [notes, setNotes] = useState(null);
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  // const [check,setCheck]=useState(false)


    const style1={
      filter :'blur(0px)'
    }
    const style2={
   
      filter :'blur(5px)'
    }

    

    const handleSubmit1 = (e) => {
      e.preventDefault();
  
      const pas = { title,password }; 
      
  
      fetch("http://localhost:8080/notes/setPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pas),
        
         // Convert to JSON string
      })
      .then(() => navigate(`/`))
        .catch((error) => console.error("Error adding note:", error));
    };

    
    const unlock=(e)=>{
      e.preventDefault();
  
      const tit = { title }; 
      
  
      fetch("http://localhost:8080/notes/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tit),
        
         // Convert to JSON string
      })
      .then(() => navigate(`/`))
        .catch((error) => console.error("Error adding note:", error));
    };

    const delete1=(e)=>{
      e.preventDefault();
  
      const tit = { title }; 
      
  
      fetch("http://localhost:8080/notes/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tit),
        
         // Convert to JSON string
      })
      .then(() => navigate(`/`))
        .catch((error) => console.error("Error adding note:", error));
    };




    const datas=[]
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/notes/${title}`);
          const data = await response.json();
          // setNotes(data);
          
          setNotes(data)
          // setIsLocked(note[0]!=null?notes[0].locki:"")
          
        
        } catch (error) {
          console.error("hello " + error);
        }
      };
      
      fetchData();
    }, []);

    
    const exit=()=>{
      if(flag)setFlag(false)

        console.log("hi");
    }


   
    if(!notes)return <h1>loading !!</h1>
    console.log(notes[0].locki)



    const handleSubmit=() =>{
      navigate('/add', {      
        state: {
          title: notes[0].title,
          description: notes[0].description
        }
      });
    };
    
    let str=notes[0].description
    let chr=str[0]
    let str1=str.substring(1)
  
  
  return (
    <div >
   

    {flag && <form className="modal" onSubmit={handleSubmit1}>
        
    <a onClick={()=>setFlag(false)}>X</a>
        <h1>{!notes[0].locki?'Set Password':'Reset Password'}</h1>


      <div className="innermodal">
      <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>

<button type='submit'>Confirm</button>
      </div>
      
      
      </form>}

     <div className="contenthead" onClick={exit}>
    <h1>{notes[0].title.toUpperCase()}</h1>

   <div className="contentbutton">
   <button onClick={()=>{setFlag(true)}}>{!notes[0].locki?'Lock':'Reset'}<svg className="unlock-icon" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M17 10V7a5 5 0 0 0-10 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><rect x="3" y="10" width="18" height="11" rx="2" ry="2" fill="currentColor"/><circle cx="12" cy="16" r="2" fill="#fff"/></svg>
    </button>

    <button onClick={delete1}>Delete<svg className="trash-icon" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  
  <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  

  <path d="M8 6v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V6h12z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="10" y1="11" x2="10" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="14" y1="11" x2="14" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    </button>
    
    {notes[0].locki &&<button onClick={unlock} className='btn2'>unlock<svg className="lock-icon" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M6 10V7a6 6 0 0 1 12 0v3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><rect x="3" y="10" width="18" height="11" rx="2" ry="2" fill="currentColor"/><circle cx="12" cy="16" r="2" fill="#fff"/></svg></button>
}
   </div>
    
    </div>
    
    <div className="container" onClick={exit}>
    
    
    <p style={flag?style2:style1}><span style={{fontSize :35}}>{chr}</span> {str1} <a onClick={handleSubmit} style={{color: 'blue',cursor: 'pointer'}}>Continue Writing</a></p>
    
      
    </div>

    
    
     </div>
  );
}

export default Content
