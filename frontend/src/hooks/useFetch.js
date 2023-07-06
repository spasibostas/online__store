import { useEffect, useState } from "react"
import { makeRequest } from './../makeRequest';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [subCategories, setSubCategories] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const res = await makeRequest.get(url)
            setData(res.data.data)
            setSubCategories(res.data.data)
          } catch (error) {
            setError(true);
          }
          setLoading(false);
        }
        fetchData()
      }, [url])

        return {data, subCategories, loading, error}
}

export default useFetch;