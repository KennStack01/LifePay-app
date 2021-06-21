import React from 'react'

import { 
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoYoutube,
} from 'react-icons/io5'


const ContactContent = () => {

    return (
        <div>
            <div className="flex flex-col mx-9 shadow-md rounded bg-white">
                <div className="flex flex-row mx-auto mt-4 mb-6">
                    <div className="my-auto">
                        <h1 className="text-lg font-medium text-gray-700">View our Social Media</h1>
                    </div>
                </div>
                <div className="mt-6 mb-4 mx-auto text-gray-700">
                    <div className="mx-7 text-gray-700 text-xl md:text-2xl font-semibold mt-2">
                        <div className="cursor-pointer my-2">
                            <a href="https://www.facebook.com/lifewordministriesinternational/" target="__blank" className="flex flex-row">
                                <div className="text-4xl my-3">
                                    <IoLogoFacebook/>
                                </div>
                                <p className=" md:text-lg text-gray-700 my-auto mx-3"> LifeWord Nation </p>
                            </a>
                        </div>
                        <div className="cursor-pointer my-2">
                            <a href="https://instagram.com/lifewordgospel?utm_medium=copy_link" target="__blank" className="flex flex-row">
                                <div className="text-4xl my-3">
                                    <IoLogoInstagram/>
                                </div>
                                <p className=" md:text-lg text-gray-700 my-auto mx-3"> @LifeWordNation </p>
                            </a>
                        </div>
                        <div className="cursor-pointer my-2">
                            <a href="https://www.youtube.com/channel/UColw4smJYwUTsavkxVPIcFg" target="__blank" className="flex flex-row">
                                <div className="text-4xl my-3">
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