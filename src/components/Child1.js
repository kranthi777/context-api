
import  Child2  from "./Child2";

function Child1() {
  console.log("child1 rendered");
  return (
    <div className="child1">
      child1
      <Child2/>
    </div>
  );
}

export {Child1};
