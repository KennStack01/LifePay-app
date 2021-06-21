import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { RiWechatPayFill } from 'react-icons/ri'

const WeChatContent = () => {

    const data = useStaticQuery(graphql`
        query {
            contentfulWeChatPay {
                qrCode {
                    file {
                        url
                        fileName
                    }
                }
            }
        }
    `)

    return (
        <div>
            <div className="flex flex-col md:grid grid-cols-1 place-items-center mx-9 md:w-96 md:mx-auto shadow-md rounded bg-white">
                <div className="flex flex-row mx-auto mt-4">
                    <div className="text-5xl" style={{color: "#5CC928"}}>
                        <RiWechatPayFill/>
                    </div>
                    <div className="my-auto">
                        <h1 className="text-lg font-bold text-gray-700">WeChat Pay</h1>
                    </div>
                </div>
                <div className="mx-7">
                    <img src={`${data.contentfulWeChatPay.qrCode.file.url}`} alt="WeChat Pay QR Code"/>
                </div>
                <div className="mx-7 mb-7 font-medium text-gray-500">
                    <p> <span>👆</span> Hold this QR Code and Click on Pay </p>
                </div>
                {/* <a href="weixin://dl/profile/nahobupe" className="mx-7 my-8 font-semibold p-4 text-gray-100 rounded-3xl" style={{background: "#5CC928"}}>
                    <p className="hover:text-white"> Click and Pay directly </p>
                </a> */}
            </div>
            <div className="flex flex-col md:w-72 md:mx-auto mx-9 mt-5 p-2 shadow-md text-xs font-medium rounded bg-white">
                <p className="italic">
                    “Come, all you who are thirsty, come to the waters;
                    and you who have no money, come, buy and eat!
                    Come, buy wine and milk without money and without cost.”
                </p>
                <p className="">Isaiah 55:1</p>
            </div>
        </div>
    )
}

export default WeChatContent
