import React, { useState } from 'react'

// const Col1 = () => {
//     const [count,setCount]=useState(0);
//     const inc =() => { setCount(count+1)}
//   return (
//     <div>

//     <h2> Number : {count}  </h2>
//     <button onClick={inc} > Add + 1 </button>


//     </div>
//   )
// }



const Col1 = () => {
    const [count, setCount] = useState(0);
    const inc = () => { setCount(count + 1) }

    return (
        <div>
            <h2> {count} </h2>
            <button onClick={inc} > Add </button>
        </div>
    )

}


// import React from "react";

// const Varconst = () => {
//   let Countnum = 1;

//   const Addedfunction = () => {
//     Countnum += 1;
//     document.getElementById("counter").innerText = Countnum;
//   };

//   return (
//     <div>
//       <h2 id="counter">{Countnum}</h2>
//       <button onClick={Addedfunction}>Add</button>
//     </div>
//   );
// };

// export default Varconst;


export default Col1

