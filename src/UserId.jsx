import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./slice";

function UserId() {
  const [userId, setUserId] = useState("");
  const value = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateName(userId));
  };
  return (
    <>
      <input type="text" onChange={(e) => setUserId(e.target.value)} />
      <button onClick={handleClick}>Submit from Id</button>
      <p>{value}</p>
    </>
  );
}
export default UserId;
