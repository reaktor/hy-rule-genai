function CalculatorApp() {

  return (
    <div >
      <div className="max-w-md mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            className="w-full bg-gray-700 text-right text-white text-2xl p-2 rounded"
            readOnly
            name="calculator-value"
            id="calculator-value"
            value="0"
          />
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          <button className="bg-gray-600 text-white p-2 rounded hover:bg-gray-500">sin</button>
          <button className="bg-gray-600 text-white p-2 rounded hover:bg-gray-500">cos</button>
          <button className="bg-gray-600 text-white p-2 rounded hover:bg-gray-500">tan</button>
          <button className="bg-gray-600 text-white p-2 rounded hover:bg-gray-500">√</button>
          
          <button className="bg-gray-600 text-white p-2 rounded hover:bg-gray-500">x²</button>
          <button className="bg-gray-600 text-white p-2 rounded hover:bg-gray-500">π</button>
          <button className="bg-gray-600 text-white p-2 rounded hover:bg-gray-500">e</button>
          <button className="bg-gray-600 text-white p-2 rounded hover:bg-gray-500">^</button>

          <button className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600">7</button>
          <button className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600">8</button>
          <button className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600">9</button>
          <button className="bg-orange-500 text-white p-2 rounded hover:bg-orange-400">÷</button>

          <button className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600">4</button>
          <button className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600">5</button>
          <button className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600">6</button>
          <button className="bg-orange-500 text-white p-2 rounded hover:bg-orange-400">×</button>

          <button className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600">1</button>
          <button className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600">2</button>
          <button className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600">3</button>
          <button className="bg-orange-500 text-white p-2 rounded hover:bg-orange-400">-</button>

          <button className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600">0</button>
          <button className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600">.</button>
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400">=</button>
          <button className="bg-orange-500 text-white p-2 rounded hover:bg-orange-400">+</button>

          <button className="bg-red-500 text-white p-2 rounded hover:bg-red-400 col-span-2">AC</button>
          <button className="bg-red-500 text-white p-2 rounded hover:bg-red-400 col-span-2">DEL</button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorApp;
