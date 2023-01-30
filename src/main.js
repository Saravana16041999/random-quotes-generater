import React from 'react'
import { useQuery} from '@tanstack/react-query'
import axios from 'axios'


const Main = () => {

    const {data , isLoading,refetch} = useQuery(["quote"],()=>{
        return axios.get(`https://api.quotable.io/random`).then((res)=> res.data)
    })

    console.log(data)

    if(isLoading){
        return <h1>Loading...</h1>
    }

  return (
    <div className='main'>
    <h1>Quote</h1>
    <div>
    <h1 className='content'>{data?.content}</h1>
    <p>{data?.author}</p>
    </div>
    <button onClick={refetch}>Random</button>
    </div>
  )
}

export default Main