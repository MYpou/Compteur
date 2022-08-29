import { useState } from "react";

function Counter(){
  
  //Count initialized to 0
  const [count, setCount] = useState(0);

  //Function is called everytime increment/decrement are clicked
  const handleClick1= () => {
    setCount(count - 1);
  }
  const handleClick2= () => {
    setCount(count + 1);
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick1}>- 1</button>
      <button onClick={handleClick2}>+ 1</button>
    </div>
  )
}

export default Counter;