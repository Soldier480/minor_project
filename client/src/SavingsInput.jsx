import React, { useState } from "react";
import axios from "axios";
const SavingsInput = () => {

 
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [expenseType, setExpenseType] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [moneySaved, setMoneySaved] = useState(0);
   const [customExpenseType,setCustomExpenseType]=useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
   
    try {
      const response = await axios.post("http://localhost:8000/savings",{
        name,
        amount,
        expenseType,
      });
       console.log(response.data);
      setSuggestions(response.data.suggestions); // Replace with actual suggestions logic
      setMoneySaved(response.data.moneySaved); 
      console.log(suggestions)// Replace with actual money saved logic
       
    } catch (error) {
      console.error(error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };
  
  return (
    <>
      <div style={{ maxWidth: "400px" }}>
        <section className="dark:bg-dark">
          <div className="container relative backdrop-blur-md  py-2 rounded-md border border-slate-500">
            <form  onSubmit={handleSubmit}  className="mx-4">
              <div >
                <label htmlFor="name" className="mb-[10px] block text-base font-medium text-dark dark:text-black">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                 
                  className="w-full bg-transparent rounded-md border border-slate-700  py-[10px] px-5 text-dark-6 placeholder-blue-600 text-xl font-semibold outline-none transition focus:border-primary active:border-primary"
                />
              </div>
              <div className="">
                <label htmlFor="amount" className="mb-[10px] block text-base font-medium text-dark dark:text-black">
                  Amount:
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  
                  className="w-full bg-transparent rounded-md border border-slate-700  py-[10px] px-5 text-dark-6 placeholder-blue-600 text-xl font-semibold outline-none transition focus:border-primary active:border-primary"
                />
              </div>
              <div>
  <label htmlFor="expenseType" className="mb-[10px] block text-base font-medium text-dark dark:text-black">
    Expense Type:
  </label>
  <select
    id="expenseType"
    name="expenseType"
    value={expenseType}
    onChange={(e) => setExpenseType(e.target.value)}
    required
    className="w-full bg-transparent rounded-md border border-slate-700 py-[10px] px-5 text-dark-6 placeholder-blue-600 text-xl font-semibold outline-none transition focus:border-primary active:border-primary"
  >
    <option value="">Select an Expense Type</option>
    <option value="food">Food</option>
    <option value="transportation">Transportation</option>
    <option value="entertainment">Utilities</option>
    <option value="housing">Entertainment</option>
    <option value="Investments and Retirement Planning">Housing</option>
    <option value="Utilities and Energy Consumption">Insurance</option>
    <option value="HealthInsurance and Healthcare Costsare">Healthcare</option>
    <option value="Shopping">Shopping</option>
    <option value="Personal Finance Management">Shopping</option>
     <option value="other">Other</option>
  </select>
  {/* Additional input field for manual entry */}
  {expenseType === "other" && (
    <input
      type="text"
      id="customExpenseType"
      name="customExpenseType"
      placeholder="Enter custom expense type"
      value={customExpenseType}
      onChange={(e) => setCustomExpenseType(e.target.value)}
      className="w-full mt-2 bg-transparent rounded-md border border-slate-700 py-[10px] px-5 text-dark-6 placeholder-black text-xl font-semibold outline-none transition focus:border-primary active:border-primary"
    />
  )}
</div>
              <button
                type="submit"
                className="mt-6 border-primary cursor-pointer bg-blue-600 ml-[5rem] rounded-md outline-none border-transparent hover:border-primary hover:bg-primary inline-flex items-center justify-center border py-[11px] px-[12px] text-center text-base font-medium text-white transition-all hover:text-white sm:px-6"
              >
                Save money
              </button>
            </form>
          </div>
        </section>
        
      </div>
    </>
  );
};

export default SavingsInput;