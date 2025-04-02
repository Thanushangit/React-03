
import { useState } from 'react'
import './App.css'

function App() {
  
  const [psw1,setPsw1]=useState();
  const [psw2,setpsw2]=useState();
  const[re,setRe]=useState(false)

  async function Handler(e) {
  
     setpsw2(e.target.value);  

    if (psw1 === e.target.value) {  
        setRe(false);
    } else {
        setRe(true);
    }
}


  return (
    <>
  <form className='container mt-3 b'>
  

    <label className="form-label">Email address</label>
    <input type="email" className="form-control"/>
   
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" value={psw1} onChange={(e)=>setPsw1(e.target.value)} className="form-control" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Re-Enter Password</label>
    <input type="password" value={psw2} onChange={Handler} className="form-control" />
   {re && <label  className="form-label text-danger">Password Doesn't match</label>}
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" />
    <label className="form-check-label" >i Agree</label>
  </div>
  <button type="submit" className="btn btn-primary">Create</button>
</form>
    </>
  )
}

export default App
