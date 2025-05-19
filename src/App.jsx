import { useDispatch, useSelector } from "react-redux";
import { decBy1, inceBy1, inceBy5 } from "./slice";
import Count from "./Count";

function App() {
  const value = useSelector((state) => state.Count.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Count :{value}</h1>
      <button onClick={() => dispatch(inceBy1())}>InceBy1</button>
      <button onClick={() => dispatch(inceBy5())}>InceBy5</button>
      <button onClick={() => dispatch(decBy1())}>decBy1</button>
      <br />
      <br />
      <Count />
    </>
  );
}
export default App;
