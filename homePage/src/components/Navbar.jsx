import { useState } from 'react';
import logo from './../assets/logo1.png';
import { NavLink, Link } from "react-router"
import SelectButton from './SelectButton';

export default function Navbar({ search, categories, setSearch, setCategoryId, categoryId, setSort }) {
    const [searchInput, setSearchInput] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-blue-950 font-bold"
            : "text-neutral-600"

    return (
        <>
            <div className='flex justify-center'>
                <nav className="border border-gray-200 flex justify-between items-center p-4 bg-white fixed w-[97%] mt-2 rounded-full  z-99 font-medium">
                    <div className="flex items-center gap-9">
                        <Link to="/" className="mr-4 cursor-pointer">
                            <img
                                src={logo}
                                alt=""
                                width="60px"
                                height="150px"
                            />
                        </Link>

                        <div className="hidden lg:flex items-center gap-9">
                            <NavLink to="/" className={navLinkClass}>
                                Home
                            </NavLink>
                            <NavLink
                                to="/allproducts"
                                className={navLinkClass}
                            >
                                All Products
                            </NavLink>
                            <NavLink
                                to="/allproducts"
                                onClick={() => {
                                    setSort("-createdAt")
                                }}
                                className="text-neutral-600"
                            >
                                New Products
                            </NavLink>
                            <Link to="/allproducts" className='flex gap-1 items-center'>
                                <SelectButton categories={categories}
                                    categoryId={categoryId}
                                    setCategoryId={setCategoryId} />
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link to="/allproducts" className="flex gap-3 relative">
                            {searchInput && (
                                <input
                                    className="border absolute -right-2 py-2 top-1/2 -translate-y-1/2 w-[70vw] sm:w-96 rounded-full px-3 border-gray-400 text-sm"
                                    type="text"
                                    placeholder='Search products...'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            )}
                            <p
                                className='z-2'
                                onClick={(e) => {
                                    e.preventDefault()
                                    setSearchInput(prev => !prev)
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4" />
                                </svg>
                            </p>
                        </Link>

                        <button
                            type="button"
                            className="lg:hidden flex items-center justify-center"
                            onClick={() => setMenuOpen(prev => !prev)}
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                {menuOpen ? (
                                    <path d="M18 6 6 18M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            <div
                className={`lg:hidden fixed left-1/2 -translate-x-1/2 w-[92%] bg-white border-2 border-gray-100 rounded-3xl shadow-lg z-98 overflow-hidden transition-all duration-300 ease-out
                    ${menuOpen ? "max-h-96 opacity-100 mt-24" : "max-h-0 opacity-0 mt-20"}`}
            >
                <div className="flex flex-col gap-4 p-5 font-medium">
                    <NavLink
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className={navLinkClass}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/allproducts"
                        onClick={() => {
                            setMenuOpen(false)
                        }}
                        className={navLinkClass}
                    >
                        All Products
                    </NavLink>
                    <NavLink
                        to="/allproducts"
                        onClick={() => {
                            setSort("-createdAt")
                            setMenuOpen(false)
                        }}
                        className="text-neutral-600"
                    >
                        New Products
                    </NavLink>
                    <Link to="/allproducts">
                    <select
                        className="text-neutral-600 border rounded-lg px-3 py-2 border-gray-300"
                        value={categoryId}
                        onChange={(e) => {
                            setCategoryId(e.target.value)
                            setMenuOpen(false)
                        }}
                    >
                        <option value="">All Categories</option>
                        {categories.map(el => (
                            <option key={el.id} value={el.id}>{el.name}</option>
                        ))}
                    </select>
                    </Link>
                </div>
            </div>
        </>
    )
}