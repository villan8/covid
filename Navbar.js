import React from 'react';
import ReactDOM from 'react-dom';
import { Link,Switch, Route } from 'react-router-dom'
import {
   BrowserRouter as Router,
 } from "react-router-dom";
 import State from './State';
 
 import Search from './Vaccine';
 import './nav.css'
const Naai=()=>{
return (<>
<Router>
   <div className="nav-title">
      <span>  
   <Link to="/State">COVID-19 TRACKER   
   </Link>&nbsp;
   |
  </span>&nbsp;
  <span className="space">
      <Link to="/Vaccine">VACCINE</Link>
</span>
 </div>

       
            
    <Switch>
        <Route path="/State" >
       
   <State/>
        </Route>
        <Route path="/Vaccine">
        <Search/>
         </Route>
    </Switch>
  
   </Router>
       
     
</>

)
}
export default Naai