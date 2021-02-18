import { AuthContext } from "../context/auth-context.js";
import { useState, useEffect } from "react";
import { Child1 } from "./Child1";
import { Child3 } from "./Child3";

function Main() {
  console.log("main rendered");
  const [isLogin, setLogin] = useState("NO");
  const loginHandler = () => {
    setLogin("YES");
  }
  return (
    <AuthContext.Provider value={{isAuthenticated: isLogin, login: loginHandler}}>
      <div className="Main">
        main content
        <Child1/>
        <Child3/>
      </div>
    </AuthContext.Provider>
  );
}

export { Main };
