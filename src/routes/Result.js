import { useParams } from "react-router-dom";
import { CloudLine } from "../CloudLine";

export const Result = () => {
  const { type } = useParams();
  return (
    <>
      <div>
        <div>
          <h3>결과는...</h3>
          <CloudLine />
          <h2>{}</h2>
          <div></div>
        </div>
        <input type="text" readOnly value="" />
      </div>
    </>
  );
};
