import { useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Submit from "../components/Submit";
import BottomWarning from "../components/BottomWarning";
import Signin from "./Signin";
function Signup (){
    const navigate =useNavigate();
    return <>
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading Label={"Sign Up"} />
                    <SubHeading data={"Create your account to get started."}/>
                    <InputBox label={"First Name"} placeholder={"John"}/>
                    <InputBox label={"Last Name"} placeholder={"Doe"}/>
                    <InputBox label={"Email"} placeholder={"john.doe@gmail.com"}/>
                    <InputBox label={"Password"} placeholder={"Password"}/>
                    <Submit label={"Submit"} to={"/dashboard"}/>
                    <BottomWarning label={"Already have an account ?"} kindOf={"  Signin"} to={"/signin"}/>
                </div>
            </div>
        </div>
    </>
}

export   {Signup};


