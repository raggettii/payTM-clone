import Submit from "./Submit"
import {useState} from 'react';
export default function Users() {
    // Backend call to write 
    const [users , setUsers]=useState([{
        firstName:"Bhadoriya",
        lastName:"Abhay",
        _id:1,
    },
{
    firstName:"Shiv",
        lastName:"Singh",
        _id:2,
}
])

    return <>
    <div className="flex flex-col justify-center " >
        <div className="text-xl pl-4 pt-3 pr-5 font-bold font-mono">
            Users
        </div>
        <div >
            <input className=" rounded-md border border-slate-300 mx-4 w-full p-1.5  font-mono font-light text-sm" placeholder="placeholder" type="text"  />
        </div>
        <div >
            {users.map(value =>
                <>
                <div className="rounded-lg mt-2 mx-4 flex  justify-between  border border-slate-300">
                <div className="flex  mt-2 ml-4 font-mono font-medium">
                    {value.firstName +" "+ value.lastName}
                </div>
                <div className="mr-2 ">
                    <Submit label={"Send Money"} to={"/send"}/>
                </div>
                </div>
                </>
                )
            }
        </div>
    </div>
    </>
}