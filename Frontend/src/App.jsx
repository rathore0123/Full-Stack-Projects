import { useEffect, useState } from 'react'
import JokeContext from './context/JokeContext'
import Card from './component/Card'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  function getJokes() {
    axios.get('/api/jokes')
      .then((respone) => {
        setJokes(respone.data)
        console.log(respone.data)
      }).catch((error) => {
        console.log(error);
      })
  }

  useEffect(() =>{
    getJokes();
  },[])

  return (
    <div className='bg-slate-800 flex justify-center items-center p-8 h-screen'>
      <JokeContext.Provider value={{ jokes }}>
        <Card />
      </JokeContext.Provider>
    </div>
  )
}

export default App
