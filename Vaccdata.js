import React, { useEffect,useState } from 'react';
import Search from './Vaccine'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import moment from 'moment';
import './State.css'
import './vacc.css';    
const Getvac=(props)=>{
    const [data,setdata]=useState([]);
    const de=props.la;
        const dea=de.toString();
        const dee=moment(dea).format('DD-MM-YYYY');
        console.log(dee);

    const getvacc=async()=>{
        const re = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${props.name}&date=${dee}`);
        const actual = await re.json();
        console.log(actual.sessions);
        setdata(actual.sessions )
        
    }   
 

   return(
       <>
        <div>
        <button className="a" onClick={getvacc}
        >FIND</button>
</div>
<div className="container  ">
    <div className="main-heading ">
        
<h1 className="mb-5 text-center"><b>INDIA COVID VACCINE</b></h1>
       </div>
       <div className="table-responsive">
           <table className="table  ">
               <thead className="thead-dark ">
                   <tr>
                    
                       <th>NAME</th>
                       <th>ADDRESS</th>
                       <th>DISTRICT</th>
                       <th>DATE</th>
                       <th>MIN AGE</th>
                       <th>FEE </th>
                       <th>DATE</th>
                       <th>AVAILABILTY DOSE1</th>
                       <th>AVAILABILITY DOSE 2</th>
                       <th>VACCINE</th>
                       <th>VACCINE BOOK</th>
                       
                       
                   </tr>

               </thead>
               <tbody>
                   
                  {
                      data.map((curElem,ind)=>{
                          return(
                          <tr key={ind}>
                            <th>{curElem.name}</th>
                            <td>{curElem.address}</td>
                            <td>{curElem.district_name}</td>
                            <td>{curElem.date}</td>
                            <td>{curElem.min_age_limit }</td>
                            <td>{curElem.fee} &#8377;</td>  
                            <td>{curElem.date}</td>
                            <td>{curElem.available_capacity_dose1}</td>
                            <td>{curElem.available_capacity_dose2}</td>       
                            <td>{curElem.vaccine}</td>
                            <td><a href ="https://selfregistration.cowin.gov.in/" target="_blank">
                                BOOK NOW </a></td>       
                        
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
   export default Getvac
