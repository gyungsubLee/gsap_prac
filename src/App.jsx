import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-500 text-white p-4 rounded-md">
        Tailwind 정상 작동!
      </div>
      ㅊ
    </>
  );
}

export default App;
