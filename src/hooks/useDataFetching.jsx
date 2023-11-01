import { useState, useEffect } from "react";

function useDataFetching(url) {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url)
                const jsonData = await response.json();
                setData(jsonData)
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }

        fetchData()
    }, [url])



    return { data, loading }
}

export default useDataFetching