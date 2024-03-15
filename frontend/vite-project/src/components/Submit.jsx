import {Link} from "react-router-dom";
export default function Submit({label , to}){
    return <>
    <div className="mt-3 mb-3 rounded-xl flex justify-center w-full bg-blue-900	  ">
        <Link  to={to}>
        {<button className="font-mono text-white font-bold text-xl p-2 ">{label}</button>}
        </Link>
    </div>
    </>
}