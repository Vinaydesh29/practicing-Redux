import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./slice";

function User() {
  const [userName, setUser] = useState("");
  const value = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateName(userName));
  };
  return (
    <>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <button onClick={handleClick}>Submit from User</button>
      <p>{value}</p>
    </>
  );
}
export default User;
