import React, { useEffect,useState,Component } from 'react';
import Getvac from './Vaccdata';
import moment from 'moment';
import {render} from 'react-dom';
import './vacc.css';    
const Seach=()=>{
const [inpa,setdata]=useState("");
    const InputEvent=(event)=>{
        const inpa=event.target.value
        console.log(inpa);
        setdata(inpa);   
    }
    const [da,setdataa]=useState("");
    const innn=(event)=>{
        const da=event.target.value;
    
       
        setdataa(da);
        
         

    }
     return(
        <>
        <div className="seachbar">
        <input type="text"
        placeholder="Enter Pincode" 
        value={inpa}onChange={InputEvent}/>
        <input type = "date" value={da}
        
         onChange={innn}></input>
        </div>
        
<Getvac name={inpa} la={da} />
        </>
    )
}
export default Seach