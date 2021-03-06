import {useEffect, useState} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import {CONTACT_PHONE, HEADER_OPTIONS, SOCIAL_MEDIA} from "../../../utils/info";
import {RiWhatsappFill, RiInstagramFill} from 'react-icons/ri';
import {FaPhone, FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";

import Link from 'next/link';

export default function Sidebar({openSidebar = false, onClose}) {
    const [open, setOpen] = useState(openSidebar);
    useEffect(() => {
        setOpen(openSidebar);
        if (!openSidebar) {

            document.querySelector("body").classList.remove("overflow-x-hidden");
            document.querySelector("body").classList.remove("overflow-y-hidden");
        } else {
            document.querySelector("body").classList.add("overflow-x-hidden");
            document.querySelector("body").classList.add("overflow-y-hidden");
        }
    }, [openSidebar])

    const handleClose = () => {
        onClose()
    }


    if (open) {
        return (
            <div
                className="w-full fixed flex flex-wrap top-0 justify-between bg-white h-screen z-50">
                <div className="w-full py-4 justify-center flex items-center flex">
                    <button
                        onClick={handleClose}
                        className="h-16 w-16 bg-indigo-200 rounded-xl focus:outline-none flex justify-center items-center">
                        <AiOutlineClose className="fill-current text-black text-2xl text-current"/>
                    </button>
                </div>
                <div className="w-full flex-1 flex">
                    <div className="w-full flex flex-wrap space-y-12">
                        {
                            HEADER_OPTIONS.map((el, i) => (
                                <div key={i} className="w-full text-center flex justify-center">
                                    <h3 className="text-2xl font-medium hover:border-indigo-300 border-b-2 border-transparent">
                                        <Link href={el.href}>
                                            <a>
                                                {el.name}
                                            </a>
                                        </Link>
                                    </h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="w-full items-end pb-20 flex justify-center">
                    <div className="w-3/12 text-center justify-center flex">
                        <a href={`https://instagram.com/${SOCIAL_MEDIA.instagram}`} className="flex items-center p-2">
                            <RiInstagramFill size={20}/>
                        </a>
                    </div>
                    <div className="w-3/12 flex justify-center text-center">
                        <a
                            href={`https://wa.me/${CONTACT_PHONE}?text=Hola, mi nombre es`}
                            className="flex items-center p-2"
                        >
                            <RiWhatsappFill size={20}/>
                        </a>
                    </div>
                    <div className="w-3/12 flex justify-center text-center">
                        <a href={`https://facebook.com/${SOCIAL_MEDIA.facebook}`} className="flex items-center p-2">
                            <FaFacebookF size={20}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}