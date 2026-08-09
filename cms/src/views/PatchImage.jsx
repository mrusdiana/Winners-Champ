import { useEffect, useState } from "react";
import UploadImage from "../components/UploadImage";
import { useParams, useNavigate } from "react-router"
import axios from "axios";
import { useSnackbar } from "notistack";
import { BaseUrl } from "../constant/Api";

export default function PatchImage() {

    const { id } = useParams()
    const [product, setProduct] = useState([])
    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate()


    async function patchProduct(e, file) {

        e.preventDefault()

        try {
            const {data} = await axios.patch(`${BaseUrl}/products/${id}`, 
            file,{
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

    async function getProducts() {
        try {
            
            const { data } = await axios.get(`${BaseUrl}/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            setProduct(data.data)
        } catch (error) {
            enqueueSnackbar(error.response.data.msg, { variant: "error" })
        }
    }


    useEffect(() => {
        patchProduct
        getProducts()
    },[])
    
    return (
        <>
        <UploadImage patchProduct={patchProduct} product={product}/>
        </>
    )
}
