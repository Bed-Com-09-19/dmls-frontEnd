import React from 'react';
import {useNavigate} from 'react-router-dom';
import "./LoanNav.css";


function LoanNav() {
const navigate = useNavigate();
const navigate1 = useNavigate();
const navigate2 = useNavigate();
const navigate3 = useNavigate();
const navigate4 = useNavigate();


function existed() {
  window.location.reload();
}
  return (
    <main>
       
        <nav>
            <ul className="navli">
              <li className='list-item' onClick={() => {navigate("/ApplyHome")}}>APPLY HOME</li>
              <li className='list-item' onClick={() => {navigate1("/Applicant")}}>START</li>
              <li className='list-item' onClick={() => {navigate2("/Address")}}>ADDRESSES</li>
              <li className='list-item' onClick={() => {navigate3("/Loan")}}>LOAN DETAILS</li>
              <li className='list-item' onClick={() => {navigate4("/Form")}}>Min-FORM UPLOAD</li>
              <li className='list-item' onClick={() => {existed()}}>Log Out</li>
            </ul>
        </nav>     

    </main>

  )
}

export default LoanNav

