import axios from "axios";
import TableProducts from "../components/TableProducts";
import { useParams, useNavigate } from "react-router"
import { BaseUrl } from "../constant/Api";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useState } from "react";


export default function ListProducts() {

    const { id } = useParams()
    const navigate = useNavigate()
    const {enqueueSnackbar} = useSnackbar()
    const [actionButton, setActionButton] = useState(false)

    async function deleteProduct() {

        try {
            const {data} = await axios.delete(`${BaseUrl}/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            

            enqueueSnackbar(data.msg, {variant: "success"})
            navigate('/listproducts')
        } catch (error) {
            enqueueSnackbar(error.response.data.msg, {variant:"error"})
        }

    }

    useEffect(()=>{
        setActionButton(true)
        if(id) {
            deleteProduct()
        }
    },[id])

    return (
        <>
            <div className="p-2 pl-18 bg-gray-100 pr-3">
                <div className="overflow-x-auto rounded-md border-gray-200 shadow-md">
                    <TableProducts actionButton={actionButton} deleteProduct={deleteProduct}/>
                </div>
            </div>

        </>
    )
}