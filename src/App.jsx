import React, { useState } from 'react';

const App = () => {
  let [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center px-4 sm:px-0">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"> 
        <h1 className="text-4xl sm:text-3xl font-bold mb-6 text-center text-pink-600">Counter App</h1> 
        <div className="bg-pink-100 p-4 rounded-lg text-center text-3xl sm:text-2xl font-semibold mb-4">{count}</div> 

        <div className="flex gap-4 flex-wrap justify-center"> 
          <button
            onClick={() => setCount(count < 10 ? count + 1 : count)}
            className="bg-blue-800 text-white text-3xl sm:text-2xl p-3 rounded-lg hover:bg-blue-900 flex-grow transition duration-300 ease-in-out"
          >
            +
          </button>

          <button
            onClick={() => setCount(count > 0 ? count - 1 : count)}
            className="bg-blue-800 text-white text-3xl sm:text-2xl p-3 rounded-lg hover:bg-blue-900 flex-grow transition duration-300 ease-in-out"
          >
            -
          </button>
        </div>

        <button
          onClick={() => setCount(0)}
          className="mt-4 w-full bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition duration-300 ease-in-out"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
