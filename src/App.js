import React, { useState } from "react";
// import Button from "./components/Button";

function App(){
  const [number1, setNumber1] = useState(0);
  const [total, setTotal] = useState(number1);
  

  function addToTotal() {
    setTotal(total + number1);
  }

  return(
    <div className="App">
      <h1>Add the Numbers</h1>
      <div className="number-inputs">
        <input
        type="number"
        value={number1}
        onChange={e => setNumber1(+e.target.value)}
        placeholder="0" 
        />
        
        
       
      </div>
      <button onClick={addToTotal}> Contribute</button>
      <h2>{total}</h2>
    </div>
  )
}

export default App;

// function App() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <button onClick={incrementCount}>Click Me</button>
       
//     </div>
//   );
// }

// function Increment() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <input type="number" placeholder="Increment" />
//        <input
//           type="number"
//           name="clicks"
//           value={count}
//           onChange={(event) => {
//             setCount(event.target.value);
//           }}/>
//     </div>
//   )
// }

// export default App;
