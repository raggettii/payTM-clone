import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";
export default function Dashboard(){
    return <>
    <div className="h-screen bg-white">
        <h1></h1>
        <AppBar  FirstName={"Jatin"}/>
        <Balance balance={"10,000"}/>
        <Users/>
        </div>

    </>
}