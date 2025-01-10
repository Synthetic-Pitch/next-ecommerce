'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'


interface Employee{
    id:number,
    name:string
}

const MainDish = () => {

    const [data,setdata] = useState<Employee[]| null>(null);

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response =await axios.get('/api');
                setdata(response.data.employees)
            }
            catch(err){
                console.log(err);
                
            }
        }
        fetchData();
    },[])
    
    const handleClick = () =>{
        console.log(data);
    }
    return (
        <div>
            <button onClick={handleClick}>render</button>
            <div>
                {
                    data? (
                        data.map((item,i)=>(
                            <div key={i}>{item.name}</div>
                        ))
                    )
                    :
                    (
                        'loading...'
                    )
                }
            </div>
        </div>
    )
}

export default MainDish