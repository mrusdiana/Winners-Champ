import TableProducts from "../components/TableProducts";
import TableCategories from "../components/TableCategories";
import { useEffect, useState } from "react";
import axios from "axios"
import { BaseUrl } from "../constant/Api";
import diagram from "../assets/diagram.png"
import { useSnackbar } from "notistack";

export default function Dashboard() {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [day, setDay] = useState("")
    const [time, setTime] = useState(new Date());
    const [actionButton, setActionButton] = useState(false)
    const { enqueueSnackbar } = useSnackbar()

    async function getProducts() {
        try {
            const { data } = await axios.get(`${BaseUrl}/products`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            setProducts(data.data)
        } catch (error) {
            enqueueSnackbar(error, {variant: 'error'})
        }
    }

    function date() {
        const hasil = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        setDay(hasil)
    }

    async function getCategories() {
        try {
            const { data } = await axios.get(`${BaseUrl}/categories`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })

            setCategories(data.data)
        } catch (error) {
            enqueueSnackbar(error.response.data.msg, {variant: 'error'})
        }
    }

    useEffect(() => {

        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        setActionButton(false)
        getProducts()
        getCategories()
        date()
        return () => clearInterval(timer);
    }, [])

    return (
        <main className="bg-gray-100 max-h-screen w-screen py-6 pl-18">
            <div className="mr-6 max-w-350">

                <div className="mb-8">
                    <p className="text-xs tracking-[0.2em] uppercase text-black mb-1">
                        Control Management System
                    </p>
                    <h1 className="text-2xl font-semibold text-neutral-900">
                        Welcome back, {localStorage.getItem("user.name") ?? "Admin"}
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-neutral-200 border border-black/30 mb-8">
                    <div className="bg-white p-6 flex items-center justify-between">
                        <div>
                            <p className="text-3xl font-semibold text-neutral-900">{day}</p>
                            <p className="text-md tracking-wide uppercase text-black">{time.toLocaleTimeString()}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22}
                            fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
                            className="text-green-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 7h7v7" />
                        </svg>
                    </div>

                    <div className="bg-white p-6 flex items-center justify-between">
                        <div>
                            <p className="text-3xl font-semibold text-neutral-900">{products.length}</p>
                            <p className="text-xs tracking-wide uppercase text-black mt-2">Total Product</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22}
                            fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
                            className="text-yellow-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.93 7.66c-.02-.05-.04-.11-.07-.16a1 1 0 0 0-.06-.08c-.03-.04-.06-.09-.1-.12-.03-.03-.06-.04-.09-.07-.04-.03-.07-.06-.11-.09h-.01l-9-5.01a.99.99 0 0 0-.97 0l-9.01 5H2.5c-.04.02-.07.06-.11.09a.6.6 0 0 0-.09.07c-.04.04-.07.08-.1.12-.02.03-.05.05-.06.08-.03.05-.05.1-.07.16-.01.03-.03.05-.03.08-.02.08-.04.17-.04.26v8c0 .36.2.7.51.87l9 5 .15.06c.03.01.06.03.09.03a1.1 1.1 0 0 0 .5 0c.03 0 .06-.02.09-.03.05-.02.1-.03.15-.06l9-5c.32-.18.51-.51.51-.87v-8c0-.09-.01-.18-.04-.26 0-.03-.02-.05-.03-.08ZM12 4.15l6.94 3.86-2.44 1.36-6.94-3.86zm-4.5 2.5 6.94 3.86L12 11.87 5.06 8.01zM4 9.71l7 3.89v5.71l-7-3.89zm16 5.71-7 3.89V13.6l2.5-1.39v3.21l2-1.11V11.1L20 9.71z" />
                        </svg>
                    </div>

                    <div className="bg-white p-6 flex items-center justify-between">
                        <div>
                            <p className="text-3xl font-semibold text-neutral-900">{categories.length}</p>
                            <p className="text-xs tracking-wide uppercase text-black mt-2">Total Categories</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="currentColor" viewBox="0 0 24 24"
                            transform="scale(1,-1)"strokeWidth={1.5} className="text-indigo-500">
                            <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m7.5 7.24c-1.05-.45-2.36-.77-3.76-.97-.2-1.4-.52-2.71-.97-3.76 2.19.81 3.92 2.55 4.73 4.73m-3.55 4.44c.03-.56.05-1.12.05-1.68s-.02-1.12-.05-1.68C18.62 10.79 20 11.64 20 12s-1.39 1.21-4.05 1.68M12 20c-.36 0-1.21-1.39-1.68-4.05.56.03 1.12.05 1.68.05s1.12-.02 1.68-.05C13.21 18.62 12.36 20 12 20m0-6c-.69 0-1.33-.03-1.93-.07-.05-.6-.07-1.24-.07-1.93s.03-1.33.07-1.93c.6-.05 1.24-.07 1.93-.07s1.33.03 1.93.07c.05.6.07 1.24.07 1.93s-.03 1.33-.07 1.93c-.6.05-1.24.07-1.93.07m-8-2c0-.36 1.39-1.21 4.05-1.68C8.02 10.88 8 11.44 8 12s.02 1.12.05 1.68C5.38 13.21 4 12.36 4 12m8-8c.36 0 1.21 1.39 1.68 4.05C13.12 8.02 12.56 8 12 8s-1.12.02-1.68.05C10.79 5.38 11.64 4 12 4m-2.76.5c-.45 1.05-.77 2.36-.97 3.76-1.4.2-2.71.52-3.76.97A8.04 8.04 0 0 1 9.24 4.5M4.51 14.76c1.05.45 2.36.77 3.76.97.2 1.4.52 2.71.97 3.76a8.04 8.04 0 0 1-4.73-4.73m10.26 4.73c.45-1.05.77-2.36.97-3.76 1.4-.2 2.71-.52 3.76-.97a8.04 8.04 0 0 1-4.73 4.73"></path>
                        </svg>
                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

                    <div className="lg:col-span-1 bg-white border border-black/30 p-6">
                        <p className="text-xs tracking-[0.2em] uppercase text-black mb-5">
                            Live Statistic
                        </p>
                        <div className="flex items-center mask-r-from-80%">
                            <img src={diagram} alt="" />
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-white border border-black/30 p-6 overflow-x-auto">
                        <p className="text-xs tracking-[0.2em] uppercase text-black mb-5">
                            Categories
                        </p>
                        <TableCategories />
                    </div>

                </div>

                <div className="bg-white border border-black/30 p-6 overflow-auto">
                    <p className="text-xs tracking-[0.2em] uppercase text-black mb-5">
                        Products
                    </p>
                    <TableProducts actionButton={actionButton}/>
                </div>

            </div>
        </main>
    )
}