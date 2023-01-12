import { useState } from "react";
import { CloudLine } from "../CloudLine";

export const Exec = () => {
  const [n, setN] = useState(1);
  return (
    <>
      <div>
        <div>
          <h2>Q{n}.</h2>
          <span></span>
          <CloudLine />
          <button></button>
          <button></button>
        </div>
        <div>
          <button>초기화하기</button>
        </div>
      </div>
    </>
  );
};
