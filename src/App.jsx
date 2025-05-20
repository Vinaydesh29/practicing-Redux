import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./slice.js";

function App() {
  const { user, status, error } = useSelector((state) => state.ApiTunk);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "") {
      dispatch(fetchData());
    }
  }, [dispatch, status]);
  return (
    <>
      {status === "Loading" && <h1>{status}</h1>}
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
