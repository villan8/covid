import React, { useEffect,useState } from 'react'
import './covid.css';

const Covid=()=>{

    const [data,setData]=useState([]);

 const getCovidata=async()=>{
try{
    const re = await fetch('https:api.covid19india.org/data.json');
 console.log(re)    
 const actual= await re.json();
 console.log(actual.statewise[0]);
setData(actual.statewise[0]);
} 
catch(err)
{
console.log(err)
}
}


    useEffect(()=>{

getCovidata();
},[]);

    return(
         <>
          <div className="l">
           <h1><b>LIVE
            </b></h1>
            <h2><b>COVID-19 TRACKER</b></h2>   
          </div> 
          <div className="card4">

<div className="des">
 <p className="p1" >OUR COUNTRY</p>
 <p className ="p1">INDIA</p>
</div>
</div>
<div className="card1">

<div className="des">
 <p className="p1" >TOTAL RECOVERED</p>
 <p className ="p1">{data.recovered}</p>
</div>
</div> <div className="card2">

<div className="des">
 <p className="p1" >TOTAL CONFIRMED</p>
 <p className ="p1">{data.confirmed}</p> 
</div>
</div> <div className="card3">

<div className="des">
 <p className="p1" >TOTAL DEATHS</p>
 <p className ="p1">{data.deaths}</p> 
</div>
</div> <div className="card4">

<div className="des">
 <p className="p1" >TOTAL ACTIVE </p>
 <p className ="p1">{data.active}</p>
 
</div>
</div> <div className="card5">

<div className="des">
 <p className="p1" >LAST UPDATED</p>
 <p className ="p1">{data.lastupdatedtime}</p> 
</div>
</div>
           
        </>
    )
}
export default Covid