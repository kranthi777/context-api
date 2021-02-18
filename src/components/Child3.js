import { useContext } from "react";
import { AuthContext } from "../context/auth-context.js";

function Child3() {
  console.log("child3 rendered");
  const authContext = useContext(AuthContext);
  return (
    <div className="child3">
      child3 {authContext.isAuthenticated} <br/>
    </div>
  );
}

export {Child3};
