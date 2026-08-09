import tshirt from './../assets/otabek-xatipov-q8G7D_in-0Y-unsplash.jpg';
import accesories from './../assets/close-up-retro-eyeglasses-book.jpg';
import jacket from './../assets/lea-ochel-nsRBbE6-YLs-unsplash.jpg';
import bg from './../assets/bg-homepage.jpg'
import { useOutletContext } from 'react-router';
import {Link} from "react-router"

export function HeroSection() {

    const { categories, setCategoryId } = useOutletContext()

    return (
        <>
            <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat h-70% flex justify-end items-center" style={{ backgroundImage: `url(${bg})` }}>
                <div className="p-7 text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] md:text-end lg:text-end mx-4 text-center">
                    <p className="text-2xl m-5">TRENDING NOW</p>
                    <h1 className="text-4xl font-bold m-5 ">
                        FROM PRESEASON <br /> POST-GAME
                    </h1>
                    <p className="text-lg m-5">
                        High performance styles that keep up season after season
                    </p>
                    <Link to="/allproducts" className="bg-red-500 py-4 px-6 inline-flex mt-3 mr-4 h-30%">
                        SHOP NOW
                    </Link>
                </div>
            </div>
            <Link to="/allproducts" className="bg-blue-950 text-white flex flex-col md:flex-row  justify-center p-3">
                {categories.map((el) => (
                    <button key={el.id} className="lg:border-r px-17.5 font-thin cursor-pointer" onClick={() => {
                        setCategoryId(el.id)
                    }}>
                        {el.name}
                    </button>
                ))}
            </Link>
            <Link to="/allproducts"  className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 m-8">
                <div className=" mx-auto text-center">
                    <img
                        src={jacket}
                        alt=""
                        width="500px"
                        height="350px"
                    />
                    <h5 className="py-3 m-2 font-bold">JACKET</h5>
                    <button onClick={() => {
                        setCategoryId(3)
                    }}  className="px-6 py-3 bg-blue-950 text-white inline-flex cursor-pointer">
                        SHOP 
                    </button>
                </div>
                <div className=" mx-auto text-center">
                    <img
                        src={tshirt}
                        alt=""
                        width="500px"
                        height="350px"
                    />
                    <h5 className="py-3 m-2 font-bold">T-SHIRT</h5>
                    <button onClick={() => {
                        setCategoryId(1)
                    }}  className="px-6 py-3 bg-blue-950 text-white inline-flex cursor-pointer">
                        SHOP
                    </button>
                </div>
                <div className=" mx-auto text-center">
                    <img
                        src={accesories}
                        alt=""
                        width="500px"
                        height="350px"
                    />
                    <h5 className="py-3 m-2 font-bold">ACCESORIES</h5>
                    <button onClick={() => {
                        setCategoryId(4)
                    }}  className="px-6 py-3 bg-blue-950 text-white inline-flex cursor-pointer">
                        SHOP
                    </button>
                </div>
            </Link>
        </>

    )
}