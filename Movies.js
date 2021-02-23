import React from 'react'
import { useState } from 'react'
import {useContext} from 'react'
import {Moviecontext} from './Moviecontext'

function Movies() {

    const [movies,setMovies]=useContext(Moviecontext)
   
    return (
        <div>
            {movies.map((movie)=>{
                return <>
                <h3>{movie.name}</h3>
                <h4>{movie.age}</h4>
                <h5>{movie.gender}</h5>
                <br/>
                </>
            })}
            {/* <h1>{vals}</h1> */}
        </div>
    )
}

export default Movies
