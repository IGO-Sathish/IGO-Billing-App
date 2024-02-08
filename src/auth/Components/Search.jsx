import React, {useEffect, useState, useTransition, useDeferredValue,} from "react";

const arrg = [...Array(20000).keys()];

const Search = () => {
    const [inputVal, setInputVal] = useState('');
    const [data, setData] = useState(arrg);
    const [ipenidng, sTransition] = useTransition();
    const defferedInput = useDeferredValue(inputVal)
    const handleInput = (e) => {
        setInputVal(e.target.value);
    }

    useEffect(() => {
        sTransition(() => {
            console.log(defferedInput)
            const filtered = arrg.filter(item => item.toString().includes(defferedInput))
            setData(filtered);



        })
    }, [defferedInput])


    return (
        <div>

            <div>
                <input style={{width:'10%', padding: '6px'} } placeholder=" Search Here " type="text" value={inputVal} onChange={handleInput} />
            </div>

            <section style={ipenidng ? { opacity: 0.4 } : null} >
                <p> search items are {defferedInput || 'All'}  </p>
                <div>{data.map(item => <p key={item} >{item}</p>)}</div>

            </section>



        </div>


    );
};

export default Search;
