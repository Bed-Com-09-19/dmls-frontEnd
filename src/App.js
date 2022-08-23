import React, { useState, useEffect}from "react";
// import Landing from "./Components/Landing/Landing";
// <Landing/>
import SignUp from './Components/SignUp/SignUp';
import SingIn from './Components/SingIn/SingIn';
import EntryPage from './Components/EntryPage/EntryPage';

import LoanNav from './Components/Apply/LoanNav/LoanNav';
import ApplyHome from './Components/Apply/ApplyHome/ApplyHome';
import Applicant from './Components/Apply/ApplicantDetails/ApplicantDetails';
import Address from './Components/Apply/Address/Address';
import Form from './Components/Apply/File/Files';
import Loan from './Components/Apply/Loan/Loan';

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'


function App() {
  const[user, setUser] = useState(false);

  useEffect(() => {
    const u = localStorage.getItem("user");
    u && JSON.parse(u) ? setUser(true) : setUser(false);
  },[]);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  const [files, setFiles] = useState([
  ])

  const removeFile = (filename) => {
    setFiles(files.filter(file => filename !== filename))
  }
 

  return (
    <div className="App">
      <Router>  
            <Routes>
                <Route path="/" element={<EntryPage/>}/>
                {!user && (<Route path="/SingIn" element={<SingIn authenticate={() => setUser(true)}/>}/>)}

                <Route path="/SignUp" element={<SignUp/>}/>
                <Route path="/LoanNav" element={<LoanNav/>}/>
                
                {user && (<Route path="/ApplyHome" element={<ApplyHome/>}/>)}
                {user && (<Route path="/Applicant" element={<Applicant/>}/>)}
                {user && (<Route path="/Address" element={<Address/>}/>)}
                {user && (<Route path="/Form" element={<Form files={files} setFiles={setFiles} removeFile={removeFile}/>}/>)}
                {user && (<Route path="/Loan" element={<Loan/>}/>)}

                <Route path="/*" element={<Navigate to={user ? "/SingIn" : "/SignUp"}/>}/>

            </Routes>
        </Router>
    </div>

    

    
  );
}

export default App;
