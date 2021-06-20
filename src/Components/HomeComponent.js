import React from 'react'
import { Link } from 'gatsby'
import WeChatPay from './WeChatPay'
import AliPay from './AliPay'
import PayPal from './PayPal'
import BankAccount from './BankAccount'

const styles = {
    layoutContent: 'text-center flex flex-col h-screen font-sans',
    children: 'flex-grow',
}


const HomeComponent = () => {
    return (
        <div className={styles.layoutContent}>
            <div className="text-center my-4">
            {/* Logo */}
                <h1 className="text-3xl font-semibold">LifePay</h1>
                <p className="text-lg font-medium text-gray-600 my-4">Quick Pay. Quick Offer.</p>
            </div>

            <main className={`${styles.children} mt-6`}>
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
                <div className="flex flex-row justify-center text-xs text-center mt-7 p-3 shadow">
                    <p className="mx-auto">About</p>
                    <p className="mx-auto">Contact</p>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
