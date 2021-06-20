import React from 'react'
import WeChatPay from './WeChatPay'
import AliPay from './AliPay'
import PayPal from './PayPal'

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

            <main className={styles.children}>
                <WeChatPay/>
                <AliPay/>
                <PayPal/>
            </main>

            {/* Footer */}
            <div>
                <div className="flex flex-row justify-center text-xs text-center mt-7 p-3 shadow">
                    <p className="mx-auto">Home</p>
                    <p className="mx-auto">About</p>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
