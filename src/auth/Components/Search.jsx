import React, {useEffect, useState, useTransition, useDeferredValue,} from "react";

const arrg = [...Array(6).keys()];

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
            // console.log(defferedInput)
            const filtered = arrg.filter(item => item.toString().includes(defferedInput))
            setData(filtered);



        })
    }, [defferedInput])


    return (
        <div>

            <div>
                <input style={{width:'100%', marginTop:'20px', border: '1px solid #999', padding: '6px'} } placeholder=" Search Here " type="text" value={inputVal} onChange={handleInput} />
            </div>

            <section style={ipenidng ? { opacity: 0.4 } : null} >
                <p> search items are {defferedInput || ' 0 to 5'}  </p>
                <div>{data.map(item => <p key={item} >{item}</p>)}</div>

            </section>



        </div>


    );
};

export default Search;
