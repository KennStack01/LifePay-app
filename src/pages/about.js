import React from 'react'
import { Link } from 'gatsby'
import AboutContent from '../Components/PageComponents/AboutContent'
import { IoArrowBack } from 'react-icons/io5'
import SEO from '../Components/Seo'



const styles = {
    layoutContent: 'text-center flex flex-col h-screen font-sans text-gray-700 bg-gray-100',
    children: 'flex-grow',
}


const about = () => {
    return (

        <div className={styles.layoutContent}>
            <SEO title="LifePay - About" description="LifePay - About Us 🎉" />
            <div className="flex flex-row justify-between my-5">
                <Link to="/">
                    <div className="text-4xl ml-3 mt-2 text-gray-800">
                        <IoArrowBack/>
                    </div>
                </Link>
                <p className="text-2xl -ml-6 bg-white rounded shadow-sm p-2"> <span className="font-semibold">LifePay</span> | LifeWord Nation </p>
                <div className="mr-4"></div>
            </div>
            <main className={`${styles.children} mt-6`}>
                <AboutContent/>
            </main>
            {/* Footer */}
            <div>
                <h1 className="text-xs text-center mt-7 p-3 shadow">
                    Developed with 💖 by <a href="https://www.twitter.com/KennKIBADI" target="_blank" rel="noreferrer" className="font-bold border-blue-20 border-b-2">Kenn Kibadi</a> 
                </h1>
            </div>
        </div>
    )
}

export default about
