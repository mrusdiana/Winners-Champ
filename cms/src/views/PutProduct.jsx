import { FormProduct } from "../components/FormProduct";
import axios from "axios"
import { BaseUrl } from "../constant/Api";
import { useEffect, useState } from "react";
import { useSnackbar } from 'notistack';
import { useParams } from "react-router"

export default function () {

    const [product, setProduct] = useState({})
    const { id } = useParams()
    const {enqueueSnackbar} = useSnackbar()

    async function getProduct() {

        try {

            const { data } = await axios.get(`${BaseUrl}/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })

            setProduct(data.data)

        } catch (error) {
            enqueueSnackbar(error.response.data.msg, {variant:"error"})
        }

    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <FormProduct id={id} product={product} />
    )
}