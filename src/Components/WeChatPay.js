import React from 'react'
import { RiWechatPayFill } from 'react-icons/ri'
import { IoArrowForwardCircle } from 'react-icons/io5'

const WeChatPay = () => {
    return (
        <div className="flex flex-row justify-evenly mx-5 my-4 shadow-md p-3 rounded-md rounded-l-none border-l-8 border-gray-600 bg-white cursor-pointer">
            <div className="text-6xl" style={{color: "#5CC928"}}>
                <RiWechatPayFill/>
            </div>
            <div className="my-auto mx-auto">
                <h1 className="text-xl font-bold text-gray-700">WeChat Pay</h1>
                <p className="font-semibold text-xs text-gray-400">For WeChat Users</p>
            </div>
            <div className="text-4xl my-auto text-gray-600">
                <IoArrowForwardCircle/>
            </div>
        </div>
    )
}

export default WeChatPay
