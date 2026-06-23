import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { SERVER_URL } from '../Config/config';
// import * as a from '../Actions/stories';
//import { MessagesContext } from '../Contexts/Messages';



//patikrinta
export default function useAdminStories() {

    const [stories, setStories] = useState(null);
    const [status, setStatus] = useState([]);
    // const [updateWriter, setUpdateWriter] = useState(null);
    // const [destroyWriter, setDestroyWriter] = useState(null);
    // const { setUser } = useContext(Auth);
    // const { addMessage } = useContext(MessagesContext);
    // const { setErrorPageType } = useContext(Router);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();


    useEffect(_ => {
        axios.get(`${SERVER_URL}/admin/stories`, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setStories(res.data);
            })
            .catch(err => {
                navigate("/error/ups");
                console.log(err);
            })
            .finally(_ => {
                setLoading(false);
            })
    }, []);

    useEffect(() => {
       
        axios.get(`${SERVER_URL}/stories/status`, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setStatus(res.data);
            })
            .catch(err => {
               if (err?.response?.status === 401) {
                    if (err.response.data.type === 'login') {
                        navigate("/login");
                    } else {
                        navigate("/error/401");
                    }
                } else {
                    navigate("/error/503");
                    //navigate("/error/ups");
                }
                console.log(err);
            })

    }, []);



    return {
        status,
        stories,
        setStories,
        loading
    };
}