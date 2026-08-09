import Card from '../components/Card';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';
import axios from "axios"
import { useSnackbar } from "notistack";
import { BaseUrl } from '../constant/baseUrl';
import loadingGif from '../assets/Rolling@1x-1.1s-200px-200px.svg'
import Pagination from '../components/Pagination';
import Filter from '../components/Filter';

export function AllProducts() {
  const { search, sort, categoryId, setSort} = useOutletContext()
  const [products, setProducts] = useState([])
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(false)
  const [paginationInfo, setPaginationInfo] = useState({})
  const [currentPage, setCurrentPage] = useState(1)

  async function getProducts() {

    try {
      setLoading(true)
      const { data } = await axios.get(`${BaseUrl}/pub/products?search=${search}&sort=${sort}&filter=${categoryId}&page=${currentPage}`)

      setProducts(data.data.data)
      setPaginationInfo(data.data)
    } catch (error) {
      enqueueSnackbar(error.response.data.msg, {variant: "error"});
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setCurrentPage(1)
    getProducts();
  },[search, sort, categoryId])

  useEffect(() => {
    getProducts();
  }, [currentPage])

  return (
    <>

      {loading ? (
        <>
          <div className='justify-center h-screen items-center flex'>
            <img src={loadingGif} alt="loading" width={60}/>
          </div>
        </>
      ) : (
        <>
          <div className="px-9 mt-22">
          <Filter setSort={setSort} sort={sort}/>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4 gap-2">
              {products.map((product) => {
                return (
                  <Card key={product.id} product={product} />
                );
              })}
            </div>
          </div>
        </>
      )}

      <Pagination  paginationInfo={paginationInfo} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </>
  )
}