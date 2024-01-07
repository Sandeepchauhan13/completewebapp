import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import axios from 'axios';
function App() {

const [jokes, setJokes]= useState([])

useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    setJokes(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
})
  return (
    <>
      <h1>Chai and Fullstack </h1>
      <p>JOKES: {jokes.length}</p>
      {
        
        jokes.map((joke, index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>

          </div>


        // if we use { curly braces we use return here 
        //    jokes.map((joke, index)=>{
        // return  <div key={joke.id}>
        //     <h3>{joke.title}</h3>
        //     <p>{joke.content}</p>

        //   </div>

        
        ))
      }
    </>
  )
}

export default App
