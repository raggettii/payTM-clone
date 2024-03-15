import { Link } from "react-router-dom";

export default function BottomWarning ({label , kindOf,to}){
    return <>
    <div className="font-sans text-xs pt-0">
        {label}
        <Link className="pointer underline pl-1 cursor-pointer" to={to}>
            {kindOf}
        </Link>
    </div>
    </>
}