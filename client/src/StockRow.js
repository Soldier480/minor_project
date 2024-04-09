import React , { useEffect,useState} from 'react';
import {iex} from "./iex.js"

function StockRow({ticker}) {
    const [stockData, setStockData] = useState(null);
//      useEffect(()=>{
//  //   query the api
//      const url=`https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${iex.api_key}`
//          fetch(url)
//          .then((response) => response.json())
//          .then((data) => {
        
                
//                 console.log(data);
//                  setStockData(data); // Set the stock data in state
//               })
//             .catch(error => {
//                 console.error('Error fetching stock data:', error);
//             });
    



//      },[])
      
 // Function to format timestamp to date and time
 const formatDateTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
    return date.toLocaleString(); // Format date and time using browser's locale
};
       
  return (
    <tr className="align-middle">
    <td className="text-center py-2" > {stockData?.[0]?.name}</td>
    <td className="text-center py-2" > {stockData?.[0]?.price}</td>
    <td className="text-center py-2" > {stockData?.[0]?.timestamp ? formatDateTime(stockData[0].timestamp) : ' -'}</td>
    <td className="text-center py-2" > {stockData?.[0]?.changesPercentage}</td>
    <td className="text-center py-2" > {stockData?.[0]?.dayHigh}</td>
    <td className="text-center py-2" > {stockData?.[0]?.dayLow}</td>
    <td className="text-center py-2" > {stockData?.[0]?.yearHigh}</td>
    
</tr>
  )
}

export default StockRow

    
    
   
