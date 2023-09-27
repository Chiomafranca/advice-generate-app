 import React, { useState } from 'react'

import './AppGenerator.css'
import Advice from './Advice'

const AppGenerator = () => {
   const [Generatoradvice, setGeneratorAdvice] = useState({
      advice: "",
      id: ""
   })

     const [isLoading, setIsLoading] = useState(false)

     const handleSubmit = async () =>{
        setIsLoading(true)

       try{
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json()
          console.log(data)
        const {id, advice} = data.slip
        setGeneratorAdvice({id: id, advice: advice})
       }catch(error){
          console.error(error)
       }finally{
          setIsLoading(false)
       }
   }

  return (
    <div>
       <Advice
          isLoading={isLoading}
          Generatoradvice={Generatoradvice}
          handleSubmit={handleSubmit}
        />
    </div>
  )
}
export default AppGenerator