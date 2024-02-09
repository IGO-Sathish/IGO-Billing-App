import React from "react";

class Apidata extends React.Component{


state = {data:[""]}

componentDidMount() {
    let url = "https://dummyjson.com/products/categories"
    fetch(url)
    .then((results) => results.json())
    .then ((results) => this.setState ({data:results}) )
}

    render (){


const listapi = this.state.data.map((val,i)=>{
    return <li key={i} > {val} </li>
})

        return(



            <div>
                <ul>
                    {listapi}
                </ul>
                </div>
        )
    }

}


export default Apidata;