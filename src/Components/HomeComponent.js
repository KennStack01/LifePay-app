import React from 'react'
import { Link } from 'gatsby'
import WeChatPay from './WeChatPay'
import AliPay from './AliPay'
import PayPal from './PayPal'
import BankAccount from './BankAccount'

const styles = {
    layoutContent: 'text-center flex flex-col h-screen font-sans md:flex-row',
    children: 'flex-grow md:my-auto md:mt-20',
}


const HomeComponent = () => {
    return (
        <div className={styles.layoutContent}>
            <div className="text-center my-4 md:my-auto md:h-screen md:w-96 md:bg-white md:shadow-md">
            {/* Logo */}
                <h1 className="text-3xl md:text-6xl md:mt-20 font-semibold">LifePay</h1>
                <p className="text-lg md:text-2xl font-medium text-gray-600 my-4">Quick Pay. Quick Offer.</p>

                <div>
                    <div className="md:grid grid-cols-2 justify-center text-xs md:text-lg text-center mt-20 p-3 hidden md:visible">
                        <p className="mx-auto"><Link to="/about" className="font-bold border-blue-20 border-b-2 hover:border-green-500">About</Link></p>
                        <p className="mx-auto"><Link to="/contact" className="font-bold border-blue-20 border-b-2 hover:border-green-500">Contact</Link></p>
                    </div>
                </div>

            </div>

            <main className={`${styles.children} mt-10 md:grid grid-cols-2`}>
                <Link to="/wechat">
                    <WeChatPay/>
                </Link>
                <Link to="/alipay">
                    <AliPay/>
                </Link>
                <Link to="/paypal">
                    <PayPal/>
                </Link>
                <Link to="/bank">
                    <BankAccount/>
                </Link>
            </main>

            {/* Footer */}
            <div>
                <div className="flex flex-row justify-center text-xs text-center mt-7 p-3 shadow md:hidden">
                    <p className="mx-auto"><Link to="/about" className="font-bold border-blue-20 border-b-2">About</Link></p>
                    <p className="mx-auto"><Link to="/contact" className="font-bold border-blue-20 border-b-2">Contact</Link></p>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
