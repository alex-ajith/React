import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
          Advice App
        </h1>

        <h2 className="text-2xl text-gray-700 text-center mb-4">{advice}</h2>

        <button
          onClick={getAdvice}
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Get Advice
        </button>

        <Message count={count} />
      </div>
    </>
  );
}

function Message(props) {
  return (
    <>
      <div className="mt-4 text-center text-gray-600">
        <p className="text-lg">
          You read
          <strong className="font-semibold text-gray-800"> {props.count} </strong>
          pieces of advice.
        </p>
      </div>
    </>
  );
}

export default App;
