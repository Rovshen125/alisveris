import { Routes, Route, Link , NavLink,useParams } from "react-router-dom";
import {useState} from 'react';
import Layout from './Layout'
import Main from './Main'
function Home ({mehsul}) {


  return(



    <div classNameName="container">


    <Routes>
    <Route exact path="/link/:testvalue/:shekil*"  element={<Layout />}  />
    <Route exact path="/"  element={<Main mehsul={mehsul} />}  />

    </Routes>
    </div>

  )
}











export default Home;
