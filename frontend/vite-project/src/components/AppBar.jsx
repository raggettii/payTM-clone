export default function AppBar(){
    const FirstName=localStorage.getItem("first")
    return <>
    <div className=" mt-5 font-mono font-semibold text-sm flex justify-between border border-gray-300 rounded-lg shadow-sm px-4 p-2 ">
        PayTM App 
        <div className="pr-5 underline">
        {"Hello "  + FirstName }
        </div>
    </div>
    </>
}