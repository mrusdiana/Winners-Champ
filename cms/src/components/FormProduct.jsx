import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import { BaseUrl } from "../constant/Api"
import Button from "./button"
import { useSnackbar } from "notistack"

export function FormProduct({ id, product }) {

    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()
    const [categories, setCategories] = useState([])

    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        imgUrl: "",
        categoryId: ""
    })

    async function getCategories() {
        try {
            
            const { data } = await axios.get(`${BaseUrl}/categories`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            setCategories(data.data)
        } catch (error) {
            enqueueSnackbar(error, {variant:"error"})
        }
    }

    useEffect(() => {
        getCategories()
    },[])

    useEffect(() => {
        if (product) {
            setForm({
                name: product.name ?? "",
                description: product.description ?? "",
                price: product.price ?? "",
                stock: product.stock ?? "",
                imgUrl: product.imgUrl ?? "",
                categoryId: product.categoryId ?? ""
            })
        }
    }, [product])

    function getFormData(fieldName, event) {

        let value = event.target.value
        
        setForm((prevData) => ({
            ...prevData,
            [fieldName]: value
        }))
    }
    
    async function handleSubmit(e) {
        try {
            e.preventDefault()

            const finalForm = {
                name: form.name,
                description: form.description,
                price: +form.price,
                stock: +form.stock,
                imgUrl: form.imgUrl,
                categoryId: form.categoryId ? +form.categoryId : form.categoryId,
            };

            let data;

            if (!product) {
                data = await axios.post(
                    `${BaseUrl}/products`,
                    finalForm,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("access_token")}`
                        }
                    }
                )
            } else {
                data = await axios.put(
                    `${BaseUrl}/products/${id}`,
                    form,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("access_token")}`
                        }
                    }
                )
            }

            navigate("/listproducts")
            enqueueSnackbar(data.data.msg, { variant: "success" })

        } catch (error) {
            if(Array.isArray(error.response.data.msg)){
                error.response.data.msg.map(
                    el => enqueueSnackbar(el, { variant: "error" })
                    )
            } else {
                enqueueSnackbar(error.response.data.msg, { variant: "error" })
            }
        }
    }

    return (
        <div className="flex justify-center h-screen items-center fixed bg-white/80 backdrop-blur-md w-screen top-0">
            <div className="bg-white shadow-md p-4">

                <h1 className="text-black/80 font-black text-3xl uppercase italic mb-1">
                    {product ? "Edit Product" : "Add New Product"}
                </h1>

                <form onSubmit={handleSubmit} className="space-y-2 w-130">

                    <div>
                        <label className="block text-black/80 text-xs font-black uppercase mb-2">
                            Product Name
                        </label>

                        <input
                            type="text"
                            placeholder="e.g. Reverse Weave Hoodie"
                            className="w-full border-2 border-gray-200 px-4 py-2 font-medium text-black/80 placeholder-gray-400"
                            onChange={(event) => getFormData("name", event)}
                            value={form.name}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <label className="block text-black/80 text-xs font-black uppercase mb-2">
                                Stock
                            </label>

                            <input
                                type="number"
                                placeholder={0}
                                className="w-full border-2 border-gray-200 px-4 py-2 font-medium text-black/80 placeholder-gray-400"
                                onChange={(event) => getFormData("stock", event)}
                                value={form.stock}
                            />
                        </div>

                        <div>
                            <label className="block text-black/80 text-xs font-black uppercase mb-2">
                                Price
                            </label>

                            <input
                                type="number"
                                placeholder={0}
                                className="w-full border-2 border-gray-200 px-4 py-2 font-medium text-black/80 placeholder-gray-400"
                                onChange={(event) => getFormData("price", event)}
                                value={form.price}
                            />
                        </div>

                    </div>

                    <div>
                        <label className="block text-black/80 text-xs font-black uppercase mb-2">
                            Image Url
                        </label>

                        <input
                            type="text"
                            placeholder="e.g. https://..."
                            className="w-full border-2 border-gray-200 px-4 py-2 font-medium text-black/80 placeholder-gray-400"
                            onChange={(event) => getFormData("imgUrl", event)}
                            value={form.imgUrl}
                        />
                    </div>

                    <div>
                        <label className="block text-black/80 text-xs font-black uppercase mb-2">
                            Category
                        </label>

                        <select
                            className="w-full border-2 border-gray-200 flex p-3 font-medium text-black/80 bg-white appearance-none"
                            onChange={(event) => getFormData("categoryId", event)}
                            value={form.categoryId} 
                        >
                            <option value="" defaultValue=""> 
                                Select category
                            </option>

                            {categories.map(el => (
                                <option key={el.id} value={el.id}>
                                    {el.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-black/80 text-xs font-black uppercase mb-2">
                            Description
                        </label>

                        <textarea
                            rows={4}
                            placeholder="Describe the product details, material, and fit..."
                            className="w-full border-2 border-gray-200 px-4 py-2 font-medium text-black/80 placeholder-gray-400 resize-none"
                            onChange={(event) => getFormData("description", event)}
                            value={form.description}
                        />
                    </div>

                    <Button product={product}/>
                    
                </form>
            </div>
        </div>
    )
}