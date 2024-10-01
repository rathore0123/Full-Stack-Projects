import React, { useContext, useEffect, useState } from 'react'
import JokeContext from '../context/JokeContext'

function Card() {
    const [index, setIndex] = useState(0)
    const {jokes} = useContext(JokeContext)

    function handlePrev (){
        if(index > 0){
            setIndex(index - 1)
        }
    }

    function handleNext (){
        if(index < jokes.length - 1){
            setIndex(index + 1)
        }
    }

    if(jokes.length === 0){
        return (
            <div>Loading</div>
        )
    }

    return (
        <div className='bg-cyan-50 flex justify-center flex-col items-center p-12 rounded-lg gap-4 w-1/2'>
            <h1 className='text-black font-bold text-4xl'>Joke App</h1>
            <div className='w-full flex flex-col items-center'>
                <div className='flex items-center gap-4'>
                    <span className="id text-lg font-semibold ">{jokes[index].id}.</span>
                    <span className="title text-lg font-semibold text-blue-600">{jokes[index].title}</span>
                </div>
                <div className="content text-lg font-semibold text-red-600">{jokes[index].content}</div>
                <div className="btns w-full flex justify-between px-8 mt-8">
                    <button onClick={handlePrev} type="button" className="btn  p-3 bg-violet-600 text-white 
                    text-sm font-bold px-5 rounded-lg hover:bg-violet-900 active:bg-green-600">Prev</button>
                    <button onClick={handleNext} type="button" className="btn  p-3 bg-violet-600 text-white 
                    text-sm font-bold px-5 rounded-lg hover:bg-violet-900 active:bg-green-600">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Card