import { Link, useOutletContext } from "react-router"

export default function Button(product) {

    return (
        <>
            <button type="submit"
                className="w-full bg-black/80 text-white font-black uppercase py-2 cursor-pointer"> SAVE </button>
            <Link to="/listproducts" 
                className="w-full bg-neutral-500 text-white font-black uppercase py-2 flex justify-center"> CANCEL </Link>
        </>
    )
}