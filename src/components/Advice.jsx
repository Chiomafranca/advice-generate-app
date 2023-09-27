import React from 'react'
import Loader from './Loader'
import btn_icon from '../images/btn_icon.png'
import space_icon from '../images/space_icon.png'

const Advice = ({isLoading, Generatoradvice, handleSubmit}) => {



  return (
    <div className='card'>
        <div className='Generatoradviceid'>
            <p>Advice#{Generatoradvice.id}</p>
        </div>    
     
        <div className='Generatoradviceadvice'>
           <h3>"{Generatoradvice.advice}"</h3>
        </div>

        <div className='space_icon'>
            <hr />
            <img src={space_icon} alt="logo" />
            <hr />
        </div>
 
         {isLoading ? (
           
          <Loader/>
       ):(
          <>
             <div className='btn'>
               <img src={btn_icon} width="40px" alt="logo" onClick={handleSubmit}/>
             </div>
          </>
       )}
    </div>
  )
}
export default Advice
