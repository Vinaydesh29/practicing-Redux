import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { input, reset } from "./slice";

function Count() {
  const [num, setNum] = useState();

  const dispatch = useDispatch();
  return (
    <>
      <input type="number" onChange={(e) => setNum(parseInt(e.target.value))} />
      <button onClick={() => dispatch(input(num))}>ince by {num}</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}

export default Count;
