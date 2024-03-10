import { useState, useEffect } from "react";

const useFetch = ( url ) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [bankDataFetched, setBankDataFetched] = useState(null);

    const fetchBankData = async () => {
        setLoading(true);

        try {
            
            const response = await fetch(url);

            const fetchedData = await response.json();

            if(!response.ok){
                throw Error('error');
            }
            else{
                
                setBankDataFetched(fetchedData.data);
                setLoading(false);
                setError(null);
                console.log(fetchedData)
            }
        } 
        catch (error) {
            setError(error.message);
            console.log(error)
        }

        setLoading(false)
    }
    
    useEffect(() => {
        fetchBankData();
    }, [url])

    return {bankDataFetched, loading, error, fetchBankData};
}
 
export default useFetch;