import React from 'react'
import Layout from '../Components/PageComponents/Layout'
import AliPayContent from '../Components/PageComponents/AliPayContent'
import SEO from '../Components/Seo'

const alipay = () => {
    return (
        <div>
            <SEO title="AliPay Payment Gateway" description="Quick Process to AliPay Platform🎉" />
            <Layout>
                <AliPayContent/>
            </Layout>
        </div>
    )
}

export default alipay
