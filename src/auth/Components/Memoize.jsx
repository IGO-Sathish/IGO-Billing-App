import React, { useMemo, useState } from "react";

const Memoize = () => {
const [count,setCount]=useState(0);
const [count2,setCount2]=useState(0);


const inc =()=> {

    setCount( count + 1 )

}

const inc2 =()=> {
    console.log(2);
    setCount2( count2 + 1  )

}

// const inc3 =()=> {
//     console.log(2);
//     setCount2( count2 + 1  )

// }

const funS = useMemo(() =>{
    console.log("Working" 
);
    let i=0;
    while(i<50000000) i++;
    return count%2===0
}, [count])

return(
    <div>
        <button onClick={inc} > 1st Button {count} </button>
        <h1> {funS? 'Even count value':'Odd count value'  }</h1>
        <button onClick={inc2} > 2nd Button {count2} </button>
    </div>
)
}

export default Memoize;