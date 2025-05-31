import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState({
    goldRatePerGram: "",
    goldGM: "",
    interest: "",
  });
const[results,setResults]=useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    const rate = parseInt(data.goldRatePerGram);
    const gram = parseFloat(data.goldGM);
    const interestRate = parseFloat(data.interest);

    if(isNaN(rate) || isNaN(gram) || isNaN(interestRate)){
      alert("Please enter the valid numbers!!");
      return;
    }

    const goldValue=rate*gram;
    const monthlyInterest = (goldValue * interestRate) / 100;
    const totalAfterDeduction=goldValue-monthlyInterest;

    setResults({
      rate,gram, interestRate,goldValue,monthlyInterest,totalAfterDeduction
    });
  };

 return (
    <>
      <div className="roboto-400 min-h-screen flex flex-col items-center pt-8 text-md px-4 sm:px-6 md:px-10 lg:px-20 bg-sky-50">
        <h3 className="text-3xl font-bold text-sky-800 pb-6 text-center">C.R Finance</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md md:max-w-lg lg:max-w-2xl">
          {/* Responsive form row */}
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <label htmlFor="goldRatePerGram" className="sm:w-56">
              Gold or silver price per gram
            </label>
            <div className="flex flex-1 gap-2">
              <input
                onChange={(e) => setData({ ...data, goldRatePerGram: e.target.value })}
                type="number"
                name="goldRatePerGram"
                id="goldRatePerGram"
                value={data.goldRatePerGram}
                placeholder="Gold or silver price (e.g: 4000)"
                className="flex-1 p-1 border-2 border-gray-300 rounded-lg"
              />
              <span>Rs</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <label htmlFor="goldGM" className="sm:w-56">
              Gold or silver weight in grams
            </label>
            <div className="flex flex-1 gap-2">
              <input
                type="number"
                name="goldGM"
                id="goldGM"
                value={data.goldGM}
                placeholder="Gold or silver weight (e.g: 3.4)"
                className="flex-1 p-1 border-2 border-gray-300 rounded-lg"
                onChange={(e) => setData({ ...data, goldGM: e.target.value })}
              />
              <span>g</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <label htmlFor="interest" className="sm:w-56">
              Interest percentage
            </label>
            <div className="flex flex-1 gap-2">
              <input
                type="number"
                name="interest"
                id="interest"
                value={data.interest}
                placeholder="interest (e.g: 2.5)"
                className="flex-1 p-1 border-2 border-gray-300 rounded-lg"
                onChange={(e) => setData({ ...data, interest: e.target.value })}
              />
              <span>%</span>
            </div>
          </div>

          <div className="flex justify-center pt-3 pb-8">
            <button
              type="submit"
              className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-12 w-44 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
            >
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
              <p className="z-10">Submit !!</p>
            </button>
          </div>
        </form>

        {results && (
          <div className="flex flex-col gap-3 w-full max-w-md md:max-w-lg lg:max-w-2xl bg-white p-4 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold text-sky-800 text-center">Results</h4>
            <p>Gold or silver price per gram: <span className="font-semibold">Rs {results.rate}</span></p>
            <p>Weight of gold or silver: <span className="font-semibold">{results.gram} g</span></p>
            <p>Interest: <span className="font-semibold">{results.interestRate} %</span></p>
            <p>Total price of gold or silver: <span className="font-semibold">Rs {results.goldValue.toFixed(0)}</span></p>
            <p>Monthly interest: <span className="font-semibold">Rs {results.monthlyInterest.toFixed(0)}</span></p>
            <p>Total amount after 1 month’s interest deduction: <span className="font-semibold">Rs {results.totalAfterDeduction.toFixed(0)}</span></p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
