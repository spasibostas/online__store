import { useEffect, useState } from "react"
import { makeRequest } from './../makeRequest';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [dataList, setDataList] = useState([]);
    const [subCategories, setSubCategories] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
      setLoading(true)
        const fetchData = async () => {
          try {
            const res = await makeRequest.get(url)
            setData(res.data.data)
            setDataList(res.data.data)
            setSubCategories(res.data.data)
          } catch (error) {
            setError(true);
          }
          setLoading(false);
        }
        fetchData()
    }, [url])

      return {data, dataList, subCategories, loading, setLoading, error}
}

export default useFetch;