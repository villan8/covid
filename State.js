import React, { useEffect,useState } from 'react';
import Covid from './covid';
import Getvac from './Vaccine';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const state = ()=>{
    const [data,setdata]=useState([]);
const getcovid=async()=>{
   const re= await fetch('https:api.covid19india.org/data.json');
   const actual = await re.json();
   console.log(actual.statewise);
setdata(actual.statewise)

}

    useEffect(()=>{

    getcovid();
},[]);


return(
<>
 <Covid/>
<div className="container-fluid mt-5">
    <div className="main-heading mb-5">
        
<h1 className="mb-5 text-center"><b>INDIA COVID DASHBOARD</b></h1>
       </div>
       <div className="table-responsive">
           <table className="table table-hover">
               <thead className="thead-dark ">
                   <tr>
                       <th>STATE</th>
                       <th>CONFIRMED</th>
                       <th>RECOVERED</th>
                       <th>DEATHS</th>
                       <th>ACTIVE</th>
                       <th>UPDATED</th>
  
                   </tr>

               </thead>
               <tbody>
                   
                  {
                      data.map((curElem,ind)=>{
                          return(
                          <tr key={ind}>
                            <th>{curElem.state}</th>
                            <td>{curElem.confirmed}</td>
                            <td>{curElem.recovered}</td>
                            <td>{curElem.deaths}</td>
                            <td>{curElem.active }</td>
                            <td>{curElem.lastupdatedtime}</td>       
                        </tr>
     

                          )
                      })
                    }
               </tbody>

           </table>               
       </div>
       </div>
 
  
</>
)
}
export default state