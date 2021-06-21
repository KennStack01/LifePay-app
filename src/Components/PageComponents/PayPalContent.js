import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FaPaypal } from 'react-icons/fa'

const PayPalContent = () => {

    const data = useStaticQuery(graphql`
        query MyQuery {
            contentfulPayPal {
                payPalLink
                payPalAccountOwner
            }
        }
    `)

    return (
        <div>
            <div className="flex flex-col mx-9 shadow-md rounded bg-white">
                <div className="flex flex-row mx-auto mt-4 mb-4">
                    <div className="text-5xl" style={{color: "#3b7bbf"}}>
                        <FaPaypal/>
                    </div>
                    <div className="my-auto">
                        <h1 className="text-lg font-bold text-gray-700">PayPal</h1>
                    </div>
                </div>
                <div className="mx-7 my-7 font-semibold text-gray-500">
                    <p>
                        Click to proceed to Payment. <br/>
                        This will lead to PayPal User Interface.<br/>
                        Enjoy Safely <span>🔐</span>.
                    </p>
                </div>
                <a href={`${data.contentfulPayPal.payPalLink}`} target="__blank" className="mx-7 my-8 font-semibold p-4 text-gray-100 rounded-3xl" style={{background: "#3b7bbf"}}>
                    <p className="hover:text-white"> Click and Pay directly </p>
                </a>
            </div>
            <div className="flex flex-col mx-9 mt-5 p-2 shadow-md text-xs font-medium rounded bg-white">
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

export default PayPalContent
