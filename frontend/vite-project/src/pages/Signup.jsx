import { useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Submit from "../components/Submit";
import BottomWarning from "../components/BottomWarning";
import Signin from "./Signin";
import { useState } from "react";
import axios from 'axios';
function Signup (){
    const [firstName ,setFirstName]=useState("");
    const [lastName ,setLastName]=useState("");
    const [email ,setEmail]=useState("");
    const [password ,setPassword]=useState("");
    const navigate =useNavigate();
    return <>
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading Label={"Sign Up"} />
                    <SubHeading data={"Create your account to get started."}/>
                    <InputBox onChange={(e)=>{
                        setFirstName(e.target.value)
                        }} label={"First Name"} placeholder={"John"}/>
                    <InputBox onChange={(e)=>{
                        setLastName(e.target.value);
                        }} label={"Last Name"} placeholder={"Doe"}/>
                    <InputBox onChange={(e)=>{
                        setEmail(e.target.value);
                        }} label={"Email"} placeholder={"john.doe@gmail.com"}/>
                    <InputBox onChange={(e)=>{
                        setPassword(e.target.value);
                        }} label={"Password"} placeholder={"Password"}/>
                    <Submit  onClick={async ()=>{
                        await axios.post("http://localhost:3000/api/v1/user/signup",
                            {
                                firstName,
                                lastName,
                                email,
                                password,
                            }).then(response =>{
                                localStorage.setItem('token', response.data.token);
                                localStorage.setItem('first',firstName);
                                navigate("/dashboard");
                            })
                    }}label={"Submit"} />
                    <BottomWarning label={"Already have an account ?"} kindOf={"  Signin"} to={"/signin"}/>
                </div>
            </div>
        </div>
    </>
}

export   {Signup};


