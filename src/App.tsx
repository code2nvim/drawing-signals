import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="flex size-1/3 flex-row justify-center gap-8">
        <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} alt="Vite logo" className="size-full" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" className="size-full" />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl">App</h1>
        <button
          onClick={increment}
          className="flex h-14 w-28 items-center justify-center rounded-md border border-white bg-gray-600 text-xl"
        >
          count is {count}
        </button>
      </div>
    </main>
  );
}

export default App;
