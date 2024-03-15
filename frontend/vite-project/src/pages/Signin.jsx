import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Submit from "../components/Submit";
import BottomWarning from "../components/BottomWarning";
export default function Signin(){
    return <>
    <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading Label={"Sign In"} />
                    <SubHeading data={"Enter your credentials to access your account"}/>
                    <InputBox label={"Email"} placeholder={"john.doe@gmail.com"}/>
                    <InputBox label={"Password"} placeholder={"Password"}/>
                    <Submit label={"Sign In"} to={"/dashboard"}/>
                    <BottomWarning label={"Don't have an account?"} kindOf={"  Signup"} to={"/signup"}/>
                </div>
            </div>
        </div>
    
    </>
}