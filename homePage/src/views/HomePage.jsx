import Card from '../components/Card';
import { useState, useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import axios from "axios"
import { useSnackbar } from "notistack";
import { BaseUrl } from '../constant/baseUrl';
import loadingGif from '../assets/Rolling@1x-1.1s-200px-200px.svg'
import Pagination from '../components/Pagination';

export function HomePage() {
  const { enqueueSnackbar } = useSnackbar()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [paginationInfo, setPaginationInfo] = useState({})
  const [currentPage, setCurrentPage] = useState(1)

  async function getProducts() {

    try {
      setLoading(true)
      const { data } = await axios.get(`${BaseUrl}/pub/products?page=${currentPage}`)

      setProducts(data.data.data)
      setPaginationInfo(data.data)
    } catch (error) {
      enqueueSnackbar(error.response.data.msg, {variant: "error"});
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts();
  }, [currentPage])

  return (
    <>
      {loading ? (
        <>
          <div className='justify-center h-screen items-center flex'>
            <img src={loadingGif} alt=""width={50}/>
          </div>
        </>
      ) : (
        <>
          <HeroSection/>
        </>
      )}

      {loading ? (
        <>
          <div className='justify-center h-screen items-center flex'>
            <img src={loadingGif} alt="loading" width={50}/>
          </div>
        </>
      ) : (
        <>
          <div className="px-9">
          <p className="border-b w-30 text-gray-800 font-thin my-5">Our Product</p>
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

      <Pagination paginationInfo={paginationInfo} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </>
  )
}