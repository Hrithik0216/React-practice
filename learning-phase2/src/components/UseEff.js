import React, { useEffect } from 'react'
import axios from 'axios';

const UseEff = () => {
    useEffect(() => {
        // console.log("Mounted")
        getData()
    }, [])
    // const getData = async ()=>{
    //     const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    //     const data =await  res.json()
    //     console.log(data)
    // }
    const getData = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments")
        console.log(res)
    }
    return (
        <div>
            {/* {getData()} */}
        </div>
    )
}

export default UseEff
