import { useMemo, useState } from "react";

function UseMemo() {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState(true);
  const [val, setVal] = useState(0);
  const style = {
    backgroundColor: theme ? "white" : "black",
    color: theme ? "black" : "white",
  };
  const doubleNumber = useMemo(() => {
    return slowFunction(val);
  }, [val]);

  return (
    <div style={style}>
      <input type="number" onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => setVal(num)}>Double</button>
      <button onClick={() => setTheme((prev) => !prev)}>Change Theme</button>
      <p>{doubleNumber}</p>
    </div>
  );
}

function slowFunction(num) {
  console.log("slow");

  return num * num;
}

export default UseMemo;
