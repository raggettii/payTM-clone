import { useEffect,useState } from "react";
import axios from 'axios';
export default function Balance() {
    const [balance , setBalance]=useState();
    useEffect(()=>{
            const fetchFunc =async ()=>{
                const response =await axios.get("http://localhost:3000/api/v1/account/balance",
                    {headers:{
                        'authorization': `Bearer ${localStorage.token}`
                }}
                )
                .then(response => {setBalance(response.data.balance)});
            }
            fetchFunc();
    },[setBalance]);
    return <>
    <div className=" mt-4 ml-3 flex justify-start font-mono font-semibold text-md ">
        {"Your Balance ₹ " + balance}
    </div>
    </>
}