import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./slice";
import User from "./User";

function App() {
  const [name, setName] = useState("");
  const value = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateName(name));
  };
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Submit from App</button>
      <p>{value}</p>
      <User />
    </>
  );
}

export default App;
