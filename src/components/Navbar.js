import Home from './Home';
import axios from 'axios';
import {useState, useEffect} from 'react';
function Navmenu() {
const [mehsul, setMehsul] = useState('')

useEffect(()=>{
  axios.get('https://fakestoreapi.com/products?limit=12').then(gelenler=>setMehsul(gelenler.data))
},[])

  return (
    <div>
    <nav>
      <div className="nav nav-tabs" style={{border:'none'}} id="nav-tab" role="tablist">
        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" style={{border:'none'}}>Home</a>
        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" style={{border:'none'}}>Profile</a>
        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false" style={{border:'none'}}>Contact</a>
      </div>
    </nav>
  <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><Home mehsul={mehsul} / ></div>
      <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">2</div>
      <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">3</div>
    </div>
    </div>

  );
}
export default Navmenu;
