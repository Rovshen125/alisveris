import { Routes, Route, Link , NavLink,useParams } from "react-router-dom";
import {useState} from 'react';


export default function Main({mehsul}){

let mehsul1 = Array.from(mehsul);

  return(
    <div className="">

    <div id="carouselExampleInterval" className="carousel slide m-5" data-bs-ride="carousel">
            <div className="carousel-inner bg-warning border border-dark"  >

            {
              mehsul1.map((m,index)=>(

                <div key={index}>

                <Link to={"link/" + m.title + '/' + m.image.replace(/\//g, "+") }  >
                <div  className="carousel-item active"    data-bs-interval="10000"  >
                <img  src={m.image} className="d-block w-100" style={{width:'10rem',height:'30rem'}} alt="..."/>
                </div>
                </Link>




                 </div>
              ))
            }



                    </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                            </button>
                    </div>

                <div className="container">
                    <div className="row" >

                    {
                      mehsul1.map((m,index)=>(


                            <div className="col-sm-4 mb-1" key={index}>
                              <Link to={"link/" + m.title + '/' + m.price }  >
                              <div className="card h-100">
                                <img src={m.image} class="card-img-top" style={{height:'inherit'}} alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">{m.title}</h5>
                                  <p className="card-text">{m.description}</p>
                                </div>
                              </div>
                                </Link>
                            </div>



                      ))

                    }

                   </div>
                   </div>
    </div>
  )
}
