import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AFTER_LOGIN_URL, } from '../Constants/main';
import { SERVER_URL, SITE_URL } from '../Config/config';
import { Auth } from '../Contexts/Auth';
import { ToastContext } from '../Contexts/Toast';

export default function useLogin() {

    const [inputs, setInputs] = useState(null);
    const navigate = useNavigate();

    const { login, setUser } = useContext(Auth);
    const { showToast } = useContext(ToastContext)

    useEffect(_ => {
        if (null !== inputs) {
            axios.post(`${SERVER_URL}/admin/login`, inputs, { withCredentials: true })
                .then(res => {
                    login(res.data.name, res.data.role, res.data.id);
                    navigate(AFTER_LOGIN_URL)
                    showToast(res.data.message)
                    console.log(res.data)

                })
                .catch(error => {
                    console.log(error);
                    if (!error.response) {
                        showToast({ type: 'error', text: 'Server error' })
                    } else {
                        showToast( error.response.data.message)
                    }
                })
        }
    }, [inputs, login]);

    const logout = _ => {
        axios.post(`${SERVER_URL}/logout`, {}, { withCredentials: true })
            .then(res => {
                window.localStorage.removeItem('user');
                window.localStorage.removeItem('role');
                window.localStorage.removeItem('id');
                setUser(null);
                navigate('/login')
                // addMessage(res.data.message);
                showToast(res.data.message)
            })
            .catch(error => {
                console.log(error);
                if (!error.response) {
                    showToast({ type: 'error', text: 'Server error' })
                } else {
                    showToast({ type: 'error', text: error.response.data.message })
                }
            })
    };


    return { setInputs, logout };

}