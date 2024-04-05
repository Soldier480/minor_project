import React from 'react'
import SavingsInput from "./SavingsInput.jsx"
import Data from "./ArrayData.jsx"
import OrderedList from './OrderList.jsx'
import { useState } from "react";
import Header from "./Header.jsx"

function SavingsCalculator() {
  const initialSuggestions = [
    {
      suggestion1: 'Cook meals at home instead of eating out to save on dining expenses.',
      suggestion2: 'Create a budget and track your expenses to identify areas where you can cut costs.',
      suggestion3: 'Cancel unused subscriptions or memberships to free up extra cash.',
      suggestion4: 'Use public transportation or carpool to reduce fuel and parking expenses.',
      suggestion5: 'Shop for groceries in bulk or during sales to save money on food purchases.',
    },
  ];
  const [clicked, setClicked] = useState(false);
  const [dataToSend, setDataToSend] = useState(initialSuggestions);

  const HandleClick=()=>{
    //prepare array to send

   let index=Math.floor(Math.random() * 5);
   let array=Data[index];
    setDataToSend(array);
      setClicked(true);
  } 
  return (
    
    <>
    <div>
        <Header/>
    </div>
    <div className='flex items-center justify-around gap-x-3'>
      <div className='ml-20'>
      <SavingsInput/>
      </div>
      <div className=' ml-12 w-96 '  >
      
         <div className=" border-primary bg-blue-600 hover:border-primary hover:bg-primary inline-flex items-center justify-center border py-[11px] px-[12px] text-center text-base font-medium text-white transition-all hover:text-white sm:px-6"
      style={{marginLeft:"83px"}}
         onClick={() => HandleClick()} >    
          Generate Suggestions</div>
          {clicked ? <OrderedList data={dataToSend} /> : <OrderedList data={initialSuggestions} />}
        
      </div>
        <img src="./image.jpg" alt="some" width="392px" height="392px" ></img>
    </div>
    
    </>
    
  )
}

export default SavingsCalculator

