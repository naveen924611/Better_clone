// "use client"
// import { useState } from "react";

// export default function MortgageCalculator() {
//   const [homePrice, setHomePrice] = useState(3000000);
//   const [downPayment, setDownPayment] = useState(600000);
//   const [interestRate, setInterestRate] = useState(6.5);
//   const [loanLength, setLoanLength] = useState(30);
//   const [zipCode, setZipCode] = useState("522508");
  
//   const loanAmount = homePrice - downPayment;
//   const monthlyRate = interestRate / 100 / 12;
//   const numberOfPayments = loanLength * 12;
//   const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

//   return (
//     <div className="bg-gray-100 p-8 rounded-lg max-w-2xl mx-auto shadow-lg">
//       <h2 className="text-3xl font-bold mb-4">Mortgage calculator</h2>
//       <p className="text-gray-600 mb-6">
//         Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
//       </p>

//       <div className="mb-4">
//         <label className="block text-gray-700 font-semibold">Home price</label>
//         <input
//           type="number"
//           value={homePrice}
//           onChange={(e) => setHomePrice(Number(e.target.value))}
//           className="w-full p-2 border rounded"
//         />
//       </div>
      
//       <div className="text-2xl font-bold mb-4">${monthlyPayment.toFixed(0)}/mo</div>
      
//       <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">Get pre-approved</button>
      
//       <div className="my-6">
//         <input
//           type="range"
//           min="0"
//           max="600000"
//           value={downPayment}
//           onChange={(e) => setDownPayment(Number(e.target.value))}
//           className="w-full"
//         />
//       </div>
      
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="block text-gray-700 font-semibold">ZIP code</label>
//           <input
//             type="text"
//             value={zipCode}
//             onChange={(e) => setZipCode(e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold">Down payment</label>
//           <input
//             type="number"
//             value={downPayment}
//             onChange={(e) => setDownPayment(Number(e.target.value))}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       </div>
      
//       <div className="grid grid-cols-2 gap-4 mt-4">
//         <div>
//           <label className="block text-gray-700 font-semibold">Interest rate</label>
//           <input
//             type="number"
//             value={interestRate}
//             step="0.1"
//             onChange={(e) => setInterestRate(Number(e.target.value))}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold">Length of loan</label>
//           <select
//             value={loanLength}
//             onChange={(e) => setLoanLength(Number(e.target.value))}
//             className="w-full p-2 border rounded"
//           >
//             <option value={15}>15 years</option>
//             <option value={30}>30 years</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import "./mort.css";

export default function MortgageCalculator() {
  // State for calculator inputs
  const [homePrice, setHomePrice] = useState(3000000);
  const [downPayment, setDownPayment] = useState(900000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [zipCode, setZipCode] = useState("581400");

  // Calculate Monthly Mortgage Payment (EMI)
  const calculateMortgagePayment = () => {
    const principal = homePrice - downPayment; // Loan amount after down payment
    const monthlyInterestRate = interestRate / 100 / 12; // Monthly interest rate
    const numberOfPayments = loanTerm * 12; // Total number of months

    if (monthlyInterestRate === 0) return (principal / numberOfPayments).toFixed(2); // Simple division if no interest

    // Mortgage formula
    const monthlyPayment =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return monthlyPayment.toFixed(2);
  };

  // Calculate down payment percentage
  const downPaymentPercentage = ((downPayment / homePrice) * 100).toFixed(2);

  return (
    <div className="calculator-container">
      {/* Header */}
      <h1>Mortgage Calculator</h1>
      <p>
        Calculate your monthly mortgage payments, including interest, using this easy-to-use calculator.
      </p>

      {/* Home Price & Monthly Payment */}
      <div className="home-price-section">
        <div className="home-price">
          <h2>Home Price</h2>
          <div className="input-container">
            <span>$</span>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(parseFloat(e.target.value))}
            />
          </div>
        </div>

        <div className="monthly-payment">
          <h2>Monthly Payment</h2>
          <p>${calculateMortgagePayment()}/mo</p>
        </div>

        <button className="pre-approval-button">Get Pre-Approved</button>
      </div>

      {/* Down Payment Slider */}
      <div className="slider-section">
        <input
          type="range"
          min="0"
          className="custom-range"
          max={homePrice}
          value={downPayment}
          onChange={(e) => setDownPayment(parseFloat(e.target.value))}
        />
      </div>

      {/* Input Fields */}
      <div className="input-fields">
        <div className="input-group">
          <label>ZIP Code</label>
          <div className="input-container">
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Down Payment</label>
          <div className="input-container">
            <span>$</span>
            <input
              type="number"
              className="down-pay"
              value={downPayment}
              onChange={(e) => setDownPayment(parseFloat(e.target.value))}
            />
            <p className="line"></p>
            <input type="number" className="percentage" max={100} inputMode="numeric" />
            <span className="per-cen">%</span>
          </div>
        </div>

        <div className="input-group">
          <label>Interest Rate (%)</label>
          <div className="input-container">
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Loan Term (Years)</label>
          <div className="input-container">
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
