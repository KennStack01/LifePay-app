import React from 'react'
import Layout from '../Components/PageComponents/Layout'
import PayPalContent from '../Components/PageComponents/PayPalContent'
import SEO from '../Components/Seo'

const paypal = () => {
    return (
        <div>
            <SEO title="PayPal Gateway" description="Quick Process to PayPal payment UI 🎉" />
            <Layout>
                <PayPalContent/>
            </Layout>
        </div>
    )
}

export default paypal
