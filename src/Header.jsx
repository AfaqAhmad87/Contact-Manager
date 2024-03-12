import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./index.css";
function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="bg-black w-[100vw] h-10 flex flex-row  justify-center items-center">
        <h1 className="text-gray-50 ">Contact Manager</h1>
      </header>
    </>
  );
}

export default Header;
