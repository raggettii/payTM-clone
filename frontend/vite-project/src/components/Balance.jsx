export default function Balance({ balance }) {
    return <>
    <div className=" mt-4 ml-3 flex justify-start font-mono font-semibold text-md ">
        {"Your Balance ₹ " + balance}
    </div>
    </>
}