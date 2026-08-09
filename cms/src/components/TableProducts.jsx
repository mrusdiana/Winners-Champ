import { useEffect, useState } from "react"
import { Link } from "react-router"
import axios from "axios"
import { BaseUrl } from "../constant/Api"
import loadingGif from "../assets/Rolling@1x-1.1s-200px-200px.svg"
import { useSnackbar } from "notistack"


export default function TableProducts({actionButton, deleteProduct}) {

    const [products, setProducts] = useState([])
    const userId = localStorage.getItem("user.id")
    const userRole = localStorage.getItem("user.role")
    const [loading, setLoading] = useState(false)
    const { enqueueSnackbar } = useSnackbar()

    async function getProducts() {
        try {
            setLoading(true)
            const { data } = await axios.get(`${BaseUrl}/products`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            setProducts(data.data)
        } catch (error) {
            enqueueSnackbar(error, {variant:"error"})
        } finally {
            setLoading(false)
        }
    }

    function formattedIDR(amount) {

        return (
            new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0
            }).format(amount))
    }

    useEffect(() => {
        getProducts()
    }, [actionButton, deleteProduct])

    return (
        <>
            {loading ? (<>
            <div className="h-screen w-screen flex justify-center items-center bg-white">
                <img src={loadingGif} alt="" width={60} height={60}/>
            </div>
            </>) : (
            <>
                <table className="min-w-full divide-y divide-gray-200 shadow-xl">
                    <thead className="bg-black/80 text-white">
                        <tr>
                            <th className="px-3 py-3 text-xs font-semibold uppercase">No</th>
                            <th className="px-6 py-3 text-xs font-semibold uppercase">
                                Products
                            </th>
                            <th className="px-6 py-3 text-xs font-semibold uppercase">Stock</th>
                            <th className="px-6 py-3 text-xs font-semibold uppercase">
                                Category
                            </th>
                            <th className="px-6 py-3 text-xs font-semibold uppercase">
                                Prices
                            </th>
                            <th className="px-6 py-3 text-xs font-semibold uppercase">Stores</th>
                            {actionButton && <th className="px-6 py-3 text-xs font-semibold uppercase" />}
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {products.map((el, index) => (
                            <tr key={el.id} className="border-y border-gray-200">
                                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                                    {index + 1}
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                                    {el.name}
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                                    {el.stock}
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                                    {el.Category.name}
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                                    {formattedIDR(el.price)}
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center border-y b border-gray-200">
                                    {el.User.username}
                                </td>
                                {(actionButton && (+userId === el.authorId || userRole === "Admin")) && (
                                    <td className="flex justify-end gap-2 px-3">
                                        <Link to={`/edit/${el.id}`} className="py-3 whitespace-nowrap text-sm font-medium text-center text-gray-500 bg-yello ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2" />
                                                <path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z" />
                                            </svg>
                                        </Link>
                                        <Link to={`/patch/${el.id}`} className="py-3 whitespace-nowrap text-sm font-medium text-center text-gray-500 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24" >
                                                <path d="M21 14V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h9v-2H5v-1.59l3-3 1.29 1.29c.39.39 1.02.39 1.41 0l5.29-5.29 3 3V14h2Zm-4.29-5.71a.996.996 0 0 0-1.41 0l-5.29 5.29-1.29-1.29a.996.996 0 0 0-1.41 0l-2.29 2.29V5h14v5.59L16.73 8.3Z"></path><path d="M8.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M21 16h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
                                            </svg>
                                        </Link>
                                        <Link to={`/delete/${el.id}`} className="py-3 whitespace-nowrap text-sm font-medium text-center text-gray-500 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24" >
                                                <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                                            </svg>
                                        </Link>
                                    </td>
                                )}

                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )}

        </>
    )
}