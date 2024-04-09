import React from 'react'
import StockRow from './StockRow.js'
import Header from './Header.jsx'
function StockPrices() {
  return (
    <>
    <div><Header/></div>
    <div className="w-full  max-w-4xl mx-auto">
  <div className="overflow-x-auto mt-[32px]">
    <table className="w-full bg-red-100 shadow-md border border-gray-200">
      <thead>
        <tr className="bg-lime-100">
          <th className="py-2  font-semibold text-sm text-gray-600">Ticker</th>
          <th className="py-2  font-semibold text-sm text-gray-600">Price</th>
          <th className="py-2  font-semibold text-sm text-gray-600">Date and Time</th>
          <th className="py-2  font-semibold text-sm text-gray-600">Changes percentage</th>
          <th className="py-2  font-semibold text-sm text-gray-600">Day High</th>
          <th className="py-2  font-semibold text-sm text-gray-600">Day Low</th>
          <th className="py-2  font-semibold text-sm text-gray-600">year High</th>
        </tr>
      </thead>
      <tbody>
        <StockRow ticker="AAPL" />
        <StockRow ticker="GOOG" />
        <StockRow ticker="MSFT" />
        <StockRow ticker="TSLA" />
        <StockRow ticker="AMZN" />
        <StockRow ticker="NFLX" />
        <StockRow ticker="JPM" />
        <StockRow ticker="V" />
        <StockRow ticker="PG" />
        <StockRow ticker="NVDA" />
      </tbody>
    </table>
  </div>
</div>
</>
  )
}

export default StockPrices