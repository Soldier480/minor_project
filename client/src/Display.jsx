import React,{useEffect} from "react";
import axios from "axios";
import { useState } from "react";
import Header from "./Header.jsx";
import SavingsInput from "./SavingsInput.jsx";
import { _amount,_expenseType,_name } from "./SavingsInput.jsx";

const Display = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [amountSaved, setamountSaved] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/display");
        const { suggestions, amountSaved } = response.data;
        setSuggestions(suggestions);
        setamountSaved(amountSaved)
        console.log(suggestions);
        console.log(amountSaved);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [suggestions,amountSaved]);
  return (
    <>
    <div> <Header/> </div>
      <div className="flex justify-center ">
        <div><SavingsInput/></div>
  <ol className="max-w-xl w-full space-y-4 mt-[06px] ml-[217px]">
  <h1> Hi {_name} !! you saved Rs {amountSaved} on {_expenseType} </h1>
    <ListItem count={1} text={suggestions[0]  || 'No suggestion'} />
    <ListItem count={2} text={suggestions[1] || 'No suggestion'} />
    <ListItem count={3} text={suggestions[2] || 'No suggestion'} />
    <ListItem count={4} text={suggestions[3] || 'No suggestion'} />
    <ListItem count={5} text={suggestions[4] || 'No suggestion'} />
    <ListItem count={6} text={suggestions[5] || 'No suggestion'} />
    <ListItem count={7} text={amountSaved ? "The total amount saved is " + amountSaved : '0'}/>
  </ol>
</div>
</>
);
};

export default Display;

const ListItem = ({ count, text }) => {
  return (
    <li className="text-body-color text-black flex text-base">
      <span className="relative z-10 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-white">
        <span className="bg-blue-600 absolute top-0 left-0 z-[-1] h-full w-full -rotate-45 rounded"></span>
        {count}
      </span>
      {text}
    </li>
  );
};
