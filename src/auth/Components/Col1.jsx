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
        <div className=' flex items-center flex-col ' >
            <h2  className="text-3xl font-bold text-gray-900  " > {count} </h2>
            <button  className='h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800' onClick={inc} > Add + 1 </button>
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

