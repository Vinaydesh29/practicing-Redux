import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./slice";

function App() {
  const { status, user, error } = useSelector((state) => state.ApiStore);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);
  return (
    <>
      {status === "pending" && <h1>{status}</h1>}
      {status === "success" && (
        <ul>
          {user.map((items, index) => {
            return <li key={index}>{items.title}</li>;
          })}
        </ul>
      )}
      {status === "error" && <h1>{error}</h1>}
    </>
  );
}

export default App;
