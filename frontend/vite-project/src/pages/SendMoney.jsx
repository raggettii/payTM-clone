import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Submit from "../components/Submit";

export default function SendMoney(){
    return <>
    <div className="flex justify-center h-screen bg-slate-300">
        <div className="flex flex-col  justify-center  ">
            <div className="text-center bg-white rounded-lg shadow-lg w-80 h-max">
                <Heading  Label={"Send Money"} />
                <div className="font-mono text-left px-5 py-2">
                    friendName
                </div>
                <InputBox  label={"Amount(₹)"} placeholder={"Enter Amount"}/>
                <button className="my-2 p-2 rounded-lg shadow-lg bg-sky-300"> 
                    Initiate Transfer
                </button>

            </div>
        </div>
    </div>
    </>
}