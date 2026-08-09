import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import { BaseUrl } from "../constant/Api"
import Button from "./button"
import { useSnackbar } from "notistack"

export function FormUser() {

    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
    })

    function getFormData(fieldName, event) {

        let value = event.target.value

        setForm((prevData) => ({
            ...prevData,
            [fieldName]: value
        }))

    }

    async function handleSubmit(e) {
        try {
            e.preventDefault()

            let data = await axios.post(
                `${BaseUrl}/addUser`,
                form,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
                }
            )


            navigate("/")
            enqueueSnackbar(data.data.msg, { variant: "success" })

        } catch (error) {
            if (Array.isArray(error.response.data.msg)) {
                error.response.data.msg.map(
                    el => enqueueSnackbar(el, { variant: "error" })
                )
            } else {
                enqueueSnackbar(error.response.data.msg, { variant: "error" })
            }
        }
    }

    return (
        <div className="flex justify-center h-screen items-center ml-18 mr-4">
            <div className=" w-150 bg-white shadow-xl p-8 rounded-md">
                <h1 className="text-black/80 font-black text-3xl uppercase mb-3">
                    Add New Staff
                </h1>
                <form className="space-y-3" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-black/80 text-xs font-black uppercase mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="username"
                            className="w-full border-2 border-gray-200 px-4 py-3 font-medium text-black/80 placeholder-gray-400 "
                            onChange={(e) => getFormData("username", e)}
                        />
                    </div>
                    <div>
                        <label className="block text-black/80 text-xs font-black uppercase mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            className="w-full border-2 border-gray-200 px-4 py-3 font-medium text-black/80 placeholder-gray-400 "
                            onChange={(e) => getFormData("email", e)}
                        />
                    </div>
                    <div>
                        <label className="block text-black/80 text-xs font-black uppercase mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full border-2 border-gray-200 px-4 py-3 font-medium text-black/80 placeholder-gray-400 "
                            onChange={(e) => getFormData("password", e)}
                        />
                    </div>
                    <div>
                        <label className="block text-black/80 text-xs font-black uppercase mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full border-2 border-gray-200 px-4 py-3 font-medium text-black/80 placeholder-gray-400 "
                            onChange={(e) => getFormData("phoneNumber", e)}
                        />
                    </div>
                    <div>
                        <label className="block text-black/80 text-xs font-black uppercase mb-2">
                            Address
                        </label>
                        <textarea
                            rows={3}
                            placeholder="Enter full address"
                            className="w-full border-2 border-gray-200 px-4 py-3 font-medium text-black/80 placeholder-gray-400  resize-none"
                            defaultValue={""}
                            onChange={(e) => getFormData("address", e)}
                        />
                    </div>
                   <Button/>
                </form>
            </div>
        </div>

    )
}