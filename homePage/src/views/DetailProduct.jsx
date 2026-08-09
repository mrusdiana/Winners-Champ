import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import { BaseUrl } from "../constant/baseUrl";
import axios from "axios";
import logo from "../assets/logo1.png"
import { useSnackbar } from "notistack";
import loadingGif from "../assets/Rolling@1x-1.1s-200px-200px.svg"
import NotfoundPage from "./NotFound";

export default function DetailProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [user, setUser] = useState({})
    const { enqueueSnackbar } = useSnackbar()
    const [loading, setLoading] = useState(false)

    async function getProducts() {
        try {
            setLoading(true)
            const { data } = await axios.get(`${BaseUrl}/pub/products/${id}`)

            setProduct(data.data)
            setUser(data.data.User)
        } catch (error) {
            enqueueSnackbar(error.response.data.msg, { variant: "error" })
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            {loading ? (
                <>
                    <div className='justify-center h-screen items-center flex'>
                        <img src={loadingGif} alt="loading" width={80} />
                    </div>
                </>) : (
                <>
                {Object.keys(product).length !== 0 ? (
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl py-24 lg:py-7 px-4 sm:px-6 gap-6 lg:gap-2 lg:mt-15">
                            <div className="flex justify-center lg:justify-start">
                                <img
                                    src={product.imgUrl}
                                    alt={product.name}
                                    className="w-full max-w-md lg:max-w-full object-cover"
                                />
                            </div>
                            <div className="p-2 sm:p-4 lg:p-8 flex flex-col gap-4 lg:gap-6">
                                <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">{product.name}</h2>
                                <p className="font-thin my-2 lg:my-5 text-base sm:text-lg lg:text-xl">
                                    {product.description}
                                </p>
                                <p className="text-gray-600 text-base sm:text-lg lg:text-lg font-light mb-2 lg:mb-7">Stock: {product.stock}</p>
                                <p className="text-xl sm:text-2xl font-bold">Rp.{product.price},-</p>
                                <Link to="/allproducts"
                                    className="bg-blue-950 py-3 lg:py-4 flex my-3 lg:my-6 text-white font-bold justify-center rounded-md lg:rounded-none"
                                >
                                    BACK
                                    <span className="ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" viewBox="0 0 24 24" >
                                            <path d="M11.79 6.29 6.09 12l5.7 5.71 1.42-1.42L9.91 13H18v-2H9.91l3.3-3.29z"></path>
                                        </svg>
                                    </span>
                                </Link>
                                <div className="flex p-1 bg-gray-100 rounded-md items-center">
                                    <div>
                                        <div className="rounded-full bg-white p-3 mr-1 uppercase font-bold w-18 py-6 border border-gray-300 ml-2">
                                            <img src={logo} alt="logo" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="m-2 text-base sm:text-lg font-bold">{user.username}</p>
                                        <div className="font-medium flex p-1 bg-red-700 mx-2 text-white w-25 mb-2 rounded-md text-xs items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15}
                                                fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20 7h-.69a3.05 3.05 0 0 0-.21-4.1c-1.16-1.16-3.19-1.16-4.35 0l-2.04 2.04C12.07 3.23 10.44 2 8.5 2 6.02 2 4 4.02 4 6.5c0 .17 0 .34.03.5H4c-.52 0-.95.4-1 .92l-.91 10.92a2.007 2.007 0 0 0 1.99 2.17h15.83a2.007 2.007 0 0 0 1.99-2.17l-.91-10.92c-.04-.52-.48-.92-1-.92Zm-3.84-2.68c.41-.41 1.12-.41 1.53 0 .2.2.32.47.32.76s-.11.56-.32.76L16.53 7h-3.05zM6 6.5a2.5 2.5 0 0 1 5 0c0 .14-.01.29-.05.46 0 .01-.01.03-.01.04H6.05C6.02 6.84 6 6.67 6 6.5M4.09 19l.83-10h14.16l.83 10z"></path><path d="M12 14c-1.65 0-3-1.35-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.65-1.35 3-3 3"></path>
                                            </svg> Mall | ORI</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ): (
                        <NotfoundPage/>
                    )}
                </>)}
        </>
    )
}