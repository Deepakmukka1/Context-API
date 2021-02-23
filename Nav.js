import React from 'react'
import {useContext} from 'react'
import {Moviecontext} from './Moviecontext'
function Nav() {
    const [movies,setMovies]=useContext(Moviecontext)
    return (
        <div style={{
            display:'inline-flex',
            height:'90px',
            width:'100%',
            backgroundColor:'black',
            fontSize:'20px',
            color:'white'
        }}>
            <ul >
                <li style={{
                display:'inline-block',
                float:'left',
                padding:'30px',
                marginLeft:'20px',


            }}>Mukka Deepak</li>
                <li style={{
                display:'inline-block',
                float:'left',
                padding:'30px',
                float:'right',
                marginLeft:'940px'

            }}>No of people: {movies.length} </li>
            </ul>
        </div>
    )
}

export default Nav
