import Navbar from "../components/Navbar";
import { useState, useEffect } from 'react';
import axios from "axios"
import { BaseUrl } from "../constant/baseUrl";
import { Outlet } from "react-router"
import { useSnackbar } from "notistack";


export default function BaseLayout() {

    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState("")
      const { enqueueSnackbar } = useSnackbar()

    async function getCategories() {
        try {
            const { data } = await axios.get(`${BaseUrl}/pub/categories`)

            setCategories(data.data)
        } catch (error) {
            enqueueSnackbar(error.response.data.msg, {variant: "error"});
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>
            <Navbar search={search} setSearch={setSearch} setSort={setSort} categories={categories} setCategoryId={setCategoryId} categoryId={categoryId}/>

            <Outlet context={{ search, sort, categories, categoryId, setCategoryId, setSort }}/>
        </>
    )
}