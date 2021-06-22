import React from 'react'
import Layout from '../Components/PageComponents/Layout'
import BankContent from '../Components/PageComponents/BankContent'
import SEO from '../Components/Seo'


const bank = () => {
    return (
        <div>
            <SEO title="Bank Payment Gateway" description="Quick Process to a Bank transfer UI 🎉" />
            <Layout>
                <BankContent/>
            </Layout>
        </div>
    )
}

export default bank
