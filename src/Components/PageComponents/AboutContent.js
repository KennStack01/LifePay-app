import React from 'react'


const AboutContent = () => {

    return (
        <div>
            <div className="flex flex-col md:grid grid-cols-1 place-items-center mx-9 md:w-96 md:mx-auto shadow-md rounded bg-white">
                <div className="flex flex-row mx-auto mt-4 mb-4">
                   {/* Logo */}
                    <div className="my-auto">
                        <h1 className="text-lg mt-2 font-bold text-gray-700">Life Word Nation</h1>
                    </div>
                </div>
                <div className="mx-7 my-7 font-semibold text-gray-500">
                    <p>
                        We are Life Word International Ministries.
                    </p>
                </div>
                {/* <a href={`${data.contentfulPayPal.payPalLink}`} target="__blank" className="mx-7 my-8 font-semibold p-4 text-gray-100 rounded-3xl" style={{ background: "#3b7bbf" }}>
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

export default AboutContent
