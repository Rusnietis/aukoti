import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../Config/config';




export default function useGet(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(_ => {
        axios.get(SERVER_URL + url)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                navigate("/error/ups");
            })
            .finally(_ => {
                setLoading(false);
            })
    }, [url]);

    return { data, loading }

}