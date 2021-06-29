import React from 'react'

import { 
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoYoutube,
} from 'react-icons/io5'


const ContactContent = () => {

    return (
        <div>
            <div className="flex flex-col md:grid grid-cols-1 place-items-center mx-9 md:w-96 md:mx-auto shadow-md rounded bg-white">
                <div className="flex flex-row mx-auto mt-4 mb-6">
                    <div className="my-auto">
                        <h1 className="text-lg font-medium text-gray-700">View our Social Media</h1>
                    </div>
                </div>
                <div className="mt-6 mb-4 mx-auto text-gray-700">
                    <div className="mx-7 text-gray-700 text-xl md:text-2xl font-semibold mt-2">
                        <div className="cursor-pointer my-2 hover:shadow p-1 hover:rounded-lg">
                            <a href="https://www.facebook.com/lifewordministriesinternational/" target="__blank" className="flex flex-row">
                                <div className="text-4xl my-3" style={{color: " #3b5998"}}>
                                    <IoLogoFacebook/>
                                </div>
                                <p className=" md:text-lg text-gray-700 my-auto mx-3"> LifeWord Ministries Int. </p>
                            </a>
                        </div>
                        <div className="cursor-pointer my-2 hover:shadow p-1 hover:rounded-lg">
                            <a href="https://instagram.com/lifewordgospel?utm_medium=copy_link" target="__blank" className="flex flex-row">
                                <div className="text-4xl my-3" style={{color: "#8a3ab9"}}>
                                    <IoLogoInstagram/>
                                </div>
                                <p className=" md:text-lg text-gray-700 my-auto mx-3"> @LifeWordNation </p>
                            </a>
                        </div>
                        <div className="cursor-pointer my-2 hover:shadow p-1 hover:rounded-lg">
                            <a href="https://www.youtube.com/channel/UColw4smJYwUTsavkxVPIcFg" target="__blank" className="flex flex-row">
                                <div className="text-4xl my-3" style={{color: "#c4302b"}}>
                                    <IoLogoYoutube/>
                                </div>
                                <p className=" md:text-lg text-gray-700 my-auto mx-3"> LifeWord Nation </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactContent
