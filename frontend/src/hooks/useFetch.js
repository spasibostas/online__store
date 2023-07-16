import { useEffect, useState } from "react"
import { makeRequest } from './../makeRequest';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [subCategories, setSubCategories] = useState([])
    const [productsPerPage, setProductsPerPage] = useState(0)
    const [totalProducts, setTotalProducts] = useState(0)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const res = await makeRequest.get(url)
            console.log(res.data.meta);
            setData(res.data.data)
            setSubCategories(res.data.data)
            setProductsPerPage(res.data.meta.pagination.pageSize)
            setTotalProducts(res.data.meta.pagination.total)
          } catch (error) {
            setError(true);
          }
          setLoading(false);
        }
        fetchData()
    }, [url])

      return {data, subCategories, loading, setLoading, error, productsPerPage, totalProducts}
}

export default useFetch;