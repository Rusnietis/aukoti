import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../Config/config';


export const Home = createContext();

export const HomeProvider = ({ children }) => {

    const [home, setHome] = useState(null);
    

    useEffect(_ => {
        axios.get(`${SERVER_URL}/stats`)
            .then(res => {
                //console.log(res.data);
                setHome(res.data);
            })
            .catch(err => {
                // if (err?.response?.status === 401) {
                //     if (err.response.data.type === 'login') {
                //         window.location.href = '#login'
                //     }else {
                //     setErrorPageType(401)
                //     }
                // } else {
                //     setErrorPageType(503)
                // }
                console.log(err);
            })
    }, [])


    return (
        <Home.Provider value={{
            home, setHome
        }}>
            {children}
        </Home.Provider>
    );
}