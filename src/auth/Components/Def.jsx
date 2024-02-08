import React, {
    useEffect,
    useState,
    useTransition,
    useDeferredValue,
} from "react";

const Def = () => {
    // const [inputVal,setInputVal]=useState('');
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [ipenidng, sTransition] = useTransition();
    const defferedCount=useDeferredValue(count)

    const clickHandle = () => {
        setCount(count + 1);
        sTransition(() => {
            const arr = Array(10000)
                .fill(1)
                .map((val, i) => count + 1000 - i);
            setData(arr);
        });
    };

    return (
        <div>
            <h1>Part 2</h1>
            <button onClick={clickHandle}> Click Me </button>
             <h3>Deffered Value is: {defferedCount}</h3>
            <div>
                {data.map((res) => (
                    <p key={res}>{res}</p>
                ))}
            </div>

            {ipenidng ? <h1> Loding......</h1>: null}
        </div>
    );
};

export default Def;