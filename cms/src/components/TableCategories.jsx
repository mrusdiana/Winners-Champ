import { useEffect, useState } from "react"
import axios from "axios"
import { BaseUrl } from "../constant/Api"
import loadingGif from "../assets/Rolling@1x-1.1s-200px-200px.svg"
import { useSnackbar } from "notistack"

export default function TableCategories() {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const { enqueueSnackbar } = useSnackbar()

    async function getCategories() {
        try {
            setLoading(true)
            const { data } = await axios.get(`${BaseUrl}/categories`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            setCategories(data.data)
        } catch (error) {
            enqueueSnackbar(error.response.data.msg, {variant: "error"})
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getCategories()
    },[])

    return (
        <>
            {loading ? (<>
                <div className="h-screen w-screen flex justify-center items-center bg-white">
                    <img src={loadingGif} alt="" width={60} height={60}/>
                </div>
            </>) : (<>

                <table className="min-w-full shadow-md">
                    <thead className="bg-black/80 text-white font-semibold">
                        <tr>
                            <th className="px-3 py-3 text-xs font-semibold uppercase">No</th>
                            <th className="px-6 py-3 text-xs font-semibold uppercase">Category</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {categories.map((el, index) => (
                            <tr key={el.id}>
                                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center border border-gray-200">{index + 1}
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center border border-gray-200">{el.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>)}

        </>
    )
}