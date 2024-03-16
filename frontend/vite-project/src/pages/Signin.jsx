import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Submit from "../components/Submit";
import BottomWarning from "../components/BottomWarning";
import { useNavigate  } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
export default function Signin(){
    const [email ,setEmail]=useState("");
    const [password ,setPassword]=useState("");
    const navigate =useNavigate();
    return <>
    <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading Label={"Sign In"} />
                    <SubHeading data={"Enter your credentials to access your account"}/>
                    <InputBox onChange={(e)=>{
                        setEmail(e.target.value);
                        }}  label={"Email"} placeholder={"john.doe@gmail.com"}/>
                    <InputBox onChange={(e)=>{
                        setPassword(e.target.value);
                        }}  label={"Password"} placeholder={"Password"}/>
                    <Submit  onClick={async ()=>{
                        await axios.post("http://localhost:3000/api/v1/user/signin",
                            {
                                email,
                                password,
                            }).then(response =>{
                                localStorage.setItem('token', response.data);
                                localStorage.setItem('first',email);
                                navigate("/dashboard");
                            })
                    }} label={"Sign In"} to={"/dashboard"}/>
                    <BottomWarning label={"Don't have an account?"} kindOf={"  Signup"} to={"/signup"}/>
                </div>
            </div>
        </div>
    
    </>
}