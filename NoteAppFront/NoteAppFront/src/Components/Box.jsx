import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Lock from "../assets/Lock.png"

import '../App.css'

function Box(prop) {
  const { name, activeBox, setActiveBox } = prop;

  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const title = name.title;
  const description = name.description || "";
  const flag = name.locki;

  const isCurrentActive = activeBox === title;

  const handleSubmit = () => {
    if (!flag) {
      navigate(`/${title}`);
    } else {
      setActiveBox(title);  
    }
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    if (password === name.password) {
      navigate(`/${title}`);
    } else {
      alert('Wrong Password');
    }
  };

  return (
    <>
      {isCurrentActive && (
        <form className="modal" onSubmit={handleSubmitPassword}>
          <a onClick={() => setActiveBox(null)}>X</a>
          <h1>Enter Password</h1>
          <h3><span className='text'>for </span>{title}</h3>
          <div className="innermodal">
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Confirm</button>
          </div>
        </form>
      )}
      <div className="Box" onClick={handleSubmit}>
        <div className="boxhead">{title}</div>

        {flag && <p className='pass'>Need Password to Open ⚠️</p>}

        <div className="boxfoot">
          <p style={flag ? { filter: 'blur(2px)' } : { filter: 'blur(0px)', cursor: 'pointer' }}>
            {description.substring(0, 850)}
          </p>
        </div>

        {flag && <img src={Lock} />}
      </div>
    </>
  );
}

export default Box
