import Submit from "./Submit"
import {useState , useEffect} from 'react';
import axios from 'axios';
export default function Users() {
    // Backend call to write
    const  [userToSearch , setUserToSearch]=useState(""); 
    const  [users , setUsers]=useState([]);
    // i was making continuos mistakes here 
    // as users is the kind of setted value 
    // to directly to nhi hi kar sakte hai 
    // $$users$$ =   await (axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${userToSearch}`).catch((e)=>console.log("Thats a error Bruhh")));
    // $$ was doing wrong

    useEffect( ()=>{
        const fetchData =  async()=>{
            const response =   await (axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${userToSearch}`).catch((e)=>console.log("Thats a error Bruhh")));
            // console.log(response.data);
            setUsers(response.data.user);
        }
        fetchData();
    },[userToSearch])
    // console.log(userToSearch);
    // console.log(users.length);
    return <>
    <div className="flex flex-col justify-center " >
        <div className="text-xl pl-4 pt-3 pr-5 font-bold font-mono">
            Users
        </div>
        <div >
            <input onChange={(e)=>{
                const toSearch=(e.target.value)
                setUserToSearch(toSearch);
                }} 
                className=" rounded-md border border-slate-300 mx-4 w-full p-1.5  font-mono font-light text-sm" placeholder="placeholder" type="text"  />
        </div>
        <div >

            {users.length > 0 ? 
        users.map(value => (
            <div key={value.id} className="rounded-lg mt-2 mx-4 flex justify-between border border-slate-300">
                <div className="flex mt-2 ml-4 font-mono font-medium">
                    {value.firstName} {value.lastName}
                </div>
                <div className="mr-2">
                    <Submit label={"Send Money"} to={"/send"} />
                </div>
            </div>
        ))
        : <div 
        className="pl-5 font-mono mt-1"
        >No users found</div>
    }
        </div>
    </div>
    </>
}