import React from 'react'
import Layout from '../Components/PageComponents/Layout'
import WeChatContent from '../Components/PageComponents/WeChatContent'
import SEO from '../Components/Seo'


const wechat = () => {
    return (
        <div>
            <SEO title="WeChat Pay Gateway" description="Pay by using this Link 🎉" />
            <Layout>
                <WeChatContent/>
            </Layout>
        </div>
    )
}

export default wechat
