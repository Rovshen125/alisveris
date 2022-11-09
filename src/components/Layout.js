import { Routes, Route, Link , NavLink,useParams } from "react-router-dom";
import {useState} from 'react';

function Layout(){
let { testvalue,shekil } = useParams();
  return(
    <div className="">
{testvalue}

///

 

<br/>
<img src={shekil.replaceAll("+", "/")}  />
    </div>
  )
}


export default Layout
