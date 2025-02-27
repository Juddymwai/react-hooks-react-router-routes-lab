import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1> Actors Page</h1>
    <div>
      {actors.map((actor)=>{
        return(
          <div key={actor.name}>
            <h3>Name:{actor.name}</h3>
          Movies:<ul>
           {actor.movies.map((movie)=>{
            return(
              <li key={movie}>{movie}</li>
            )
          })}
        </ul>
          </div> 
          
        )
      })}
      
    </div>
  </div>;
}

export default Actors;
