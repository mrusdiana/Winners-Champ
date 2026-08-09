import { NavLink, useNavigate } from "react-router"

export default function SideBar() {

    const navigate = useNavigate()

    function handleLogout() {
        localStorage.clear()
        navigate("/login")
    }

    return (
        <>
            <nav className="bg-white/80 backdrop-blur-sm shadow-md flex flex-col w-15 fixed top-0">
                <div className="flex flex-col h-screen justify-between p-2  z-100">
                    <div className="my-7 flex flex-col gap-10">
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ?  "bg-gray-200 w-13 p-1 text-black text-center flex items-center rounded-l-full shadow-xl" : "text-gray-500"
                        }>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={45}
                                height={45}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="bg-white rounded-full p-2"
                            >
                                <path d="M3 13h1v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h1c.4 0 .77-.24.92-.62.15-.37.07-.8-.22-1.09l-8.99-9a.996.996 0 0 0-1.41 0l-9.01 9c-.29.29-.37.72-.22 1.09s.52.62.92.62Zm7 7v-5h4v5zm2-15.59 6 6V20h-2v-5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v5H6v-9.59z"></path>
                            </svg>
                        </NavLink>
                        <NavLink to="/add" className={({ isActive }) =>
                            isActive ?"bg-gray-200 w-13 p-1 text-black text-center flex items-center rounded-l-full shadow-xl" : "text-gray-500"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={45}
                                height={45}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="bg-white rounded-full p-2"
                            >
                                <path d="M18.71 5.29a.996.996 0 0 0-1.41 0l-11 11a1 1 0 0 0-.29.71v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l11-11a.996.996 0 0 0 0-1.41l-3-3ZM9.59 19H8v-1.59l7.5-7.5 1.59 1.59zm8.91-8.91L16.91 8.5 18 7.41 19.59 9zM7 12c.26 0 .5-.15.61-.4l1.23-2.77 2.77-1.23c.24-.11.4-.35.4-.61s-.16-.5-.4-.61L8.84 5.15 7.61 2.38a.68.68 0 0 0-.6-.4c-.27-.02-.5.15-.61.39L5.17 5.04 2.39 6.38c-.23.11-.38.35-.38.61s.16.49.4.6l2.77 1.23 1.23 2.77c.11.24.35.4.61.4Zm14.76 6.63-1.66-.74-.74-1.66a.41.41 0 0 0-.36-.24c-.16-.01-.3.09-.37.23l-.74 1.6-1.67.8c-.14.07-.23.21-.23.37s.1.3.24.36l1.66.74.74 1.66a.404.404 0 0 0 .74 0l.74-1.66 1.66-.74a.404.404 0 0 0 0-.74Z"></path>
                            </svg>
                        </NavLink>
                        <NavLink to="/listproducts" className={({ isActive }) =>
                            isActive ? "bg-gray-200 w-13 p-1 text-black text-center flex items-center rounded-l-full shadow-xl" : "text-gray-500"
                        }>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={45}
                                height={45}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="bg-white rounded-full p-2"
                            >
                                <path d="M21.93 7.66c-.02-.05-.04-.11-.07-.16a1 1 0 0 0-.06-.08c-.03-.04-.06-.09-.1-.12-.03-.03-.06-.04-.09-.07-.04-.03-.07-.06-.11-.09h-.01l-9-5.01a.99.99 0 0 0-.97 0l-9.01 5H2.5c-.04.02-.07.06-.11.09a.6.6 0 0 0-.09.07c-.04.04-.07.08-.1.12-.02.03-.05.05-.06.08-.03.05-.05.1-.07.16-.01.03-.03.05-.03.08-.02.08-.04.17-.04.26v8c0 .36.2.7.51.87l9 5 .15.06c.03.01.06.03.09.03a1.1 1.1 0 0 0 .5 0c.03 0 .06-.02.09-.03.05-.02.1-.03.15-.06l9-5c.32-.18.51-.51.51-.87v-8c0-.09-.01-.18-.04-.26 0-.03-.02-.05-.03-.08ZM12 4.15l6.94 3.86-2.44 1.36-6.94-3.86zm-4.5 2.5 6.94 3.86L12 11.87 5.06 8.01zM4 9.71l7 3.89v5.71l-7-3.89zm16 5.71-7 3.89V13.6l2.5-1.39v3.21l2-1.11V11.1L20 9.71z"></path>
                            </svg>
                        </NavLink>
                        <NavLink to="/listcategories" className={({ isActive }) =>
                            isActive ? "bg-gray-200 w-13 p-1 text-black text-center flex items-center rounded-l-full shadow-xl" : "text-gray-500"
                        }>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={45}
                                height={45}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="bg-white rounded-full p-2"
                            >
                                <path d="M3 3h4v4H3zm7 0h4v4h-4z" />
                                <path d="M10 3h4v4h-4zm7 0h4v4h-4zM3 17h4v4H3zm7 0h4v4h-4z" />
                                <path d="M10 17h4v4h-4zm7 0h4v4h-4zM3 10h4v4H3zm7 0h4v4h-4z" />
                                <path d="M10 10h4v4h-4zm7 0h4v4h-4z" />
                            </svg>
                        </NavLink>
                        <NavLink to="/add-user" className={({ isActive }) =>
                            isActive ? "bg-gray-200 w-13 p-1 text-black text-center flex items-center rounded-l-full shadow-xl" : "text-gray-500"
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45}
                                fill="currentColor" viewBox="0 0 24 24" className="bg-white rounded-full p-2">
                                <path d="M22 11h-3V8h-2v3h-3v2h3v3h2v-3h3zM4 8c0 2.28 1.72 4 4 4s4-1.72 4-4-1.72-4-4-4-4 1.72-4 4m6 0c0 1.18-.82 2-2 2s-2-.82-2-2 .82-2 2-2 2 .82 2 2M3 20h10c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5H7c-2.76 0-5 2.24-5 5v1c0 .55.45 1 1 1m4-5h2c1.65 0 3 1.35 3 3H4c0-1.65 1.35-3 3-3"></path>
                            </svg>
                        </NavLink>
                    </div>
                    <a onClick={handleLogout} className="flex justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M15 11H8v2h7v4l6-5-6-5z" />
                            <path d="M5 21h7v-2H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2" />
                        </svg>
                    </a>
                </div>
            </nav>
        </>
    )
}