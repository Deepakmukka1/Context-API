import React from 'react'
import {createContext,useState} from 'react'
export const Moviecontext=createContext();

export const MovieConsumer=(props)=>{

    

 const [movies,setMovies]=useState([
    
    {
        name:'Riya',
        age:34,
        gender:'Female'
    },
    {
        name:'Sammera',
        age:45,
        gender:'Female'
    },
    {
        name:'ajith',
        age:24,
        gender:'male'
    },
    
])

    return (
        <Moviecontext.Provider value={[movies,setMovies]}>
            {props.children}
        </Moviecontext.Provider>
    )

}

