import { useContext, memo } from "react";
import { AuthContext } from "../context/auth-context.js";

function Child2() {
  console.log("child2 rendered");
  const authContext = useContext(AuthContext);
  const handleLogin = () => {
    authContext.login();
  }
  return (
    <div className="child2">
      child2 {authContext.isAuthenticated}<br/>
      <button onClick={handleLogin}>UpdateLogin</button>
    </div>
  );
}

export default memo(Child2);
