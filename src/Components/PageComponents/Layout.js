import React from 'react'
import { Link } from 'gatsby'
import { IoArrowBack } from 'react-icons/io5'


const styles = {
    layoutContent: 'text-center flex flex-col h-screen font-sans text-gray-700',
    children: 'flex-grow',
}

const Layout = ({children}) => {
    return (
        <div className={styles.layoutContent}>
            <div className="flex flex-row justify-between my-5">
                <Link to="/">
                    <div className="text-4xl ml-3 mt-2 text-gray-800">
                        <IoArrowBack/>
                    </div>
                </Link>
                <p className="text-2xl -ml-6 bg-white shadow-sm p-2"> <span className="font-semibold">LifePay</span> | Checkout </p>
                <div className="mr-4"></div>
            </div>
            <main className={`${styles.children} mt-6`}>
                {children}
            </main>
        </div>
    )
}

export default Layout
