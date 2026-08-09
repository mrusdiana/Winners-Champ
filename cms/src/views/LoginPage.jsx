import { useState } from 'react';
import { useNavigate, Navigate } from "react-router"
import logo from './../../../assets/logo1.png';
import axios from "axios"
import { BaseUrl } from '../constant/Api';
import { useSnackbar } from 'notistack';

export default function LoginPage() {

    const {enqueueSnackbar} = useSnackbar()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    if (localStorage.getItem('access_token')) {
        return <Navigate to="/" />
    }

    async function handleLogin(e) {

        e.preventDefault()
        try {
            const { data } = await axios.post(`${BaseUrl}/login`, {email, password});

            localStorage.setItem("access_token", data.token);
            localStorage.setItem("user.id", data.user.id);
            localStorage.setItem("user.name", data.user.username);
            localStorage.setItem("user.role", data.user.role);
            navigate("/");

            enqueueSnackbar(data.msg, {variant: 'success'})
        } catch (error) {
            enqueueSnackbar(error.response.data.msg, {variant: "error"})
        }
    }

    return (
        <>
            <div className="flex items-center h-screen justify-between flex-col py-9 pt-30">
                <img src={logo} alt="logo" width="200px" />
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col gap-5 p-8 w-100">
                        <p className="font-medium">Login</p>
                        <input
                            type="email"
                            className="border py-2 px-5 border-gray-500 rounded-md"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="border py-2 px-5 border-gray-500 rounded-md"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="bg-blue-950 text-white rounded-3xl p-3 font-medium">
                            Login
                        </button>
                        <p className="mx-auto text-sm">By continuing, you agree to our <span className='text-blue-700 border-b'> Terms of services </span></p>
                    </div>
                </form>
                <p className="bottom-0 text-gray-600">Privacy policy</p>
            </div>

        </>
    )
}