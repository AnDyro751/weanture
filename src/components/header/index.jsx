import {HEADER_OPTIONS, SITE_NAME} from "../../utils/info";
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {throttle} from 'lodash'
import Image from 'next/image'
import ContactDetails from "./ContactDetails";
import Sidebar from "./Sidebar";
import {AiOutlineMenu} from 'react-icons/ai';

export default function MainHeader({transparent = false}) {

    const [activeHeader, setActiveHeader] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    useEffect(() => {
        // console.log(throttle, "SS")
        var throttled = throttle(setNewStatus, 1000)
        window.addEventListener("scroll", throttled);
        return () => {
            window.removeEventListener("scroll", throttled);
            throttle.cancel;
        }
    }, []);

    const handleOpen = () => {
        setOpenMenu(!openMenu);
    };

    const setNewStatus = () => {
        console.log("HOLA new status", Date.now());
        if (window.scrollY > 100) {
            setActiveHeader(true);
        } else {
            setActiveHeader(false);
        }
    }

    const onHandleClose = () => {
        setOpenMenu(false);
    }

    return (
        <>
            <ContactDetails/>
            <Sidebar
                onClose={onHandleClose}
                openSidebar={openMenu}/>
            <header
                className={`w-full flex items-center flex-wrap z-40 sticky top-0 ${activeHeader ? "shadow bg-white" : ""} ${transparent ? "" : "bg-white"}`}>
                <div className="w-11/12 mx-auto flex items-center py-1 py-2 md:py-3">
                    <div className="w-10/12 md:w-6/12 flex items-center space-x-4">
                        <div className="relative h-7 w-7">
                            <Link href={"/"}>
                                <a>
                                    <Image
                                        src="/logo.png"
                                        title={`${SITE_NAME} logo`}
                                        alt={`${SITE_NAME} logo`}
                                        width={80}
                                        height={80}
                                    />
                                </a>
                            </Link>
                        </div>
                        <Link href={"/"}>
                            <a className="font-bold text-lg md:text-2xl py-1 text-gray-900">
                                {SITE_NAME}
                            </a>
                        </Link>
                    </div>

                    <div className="w-2/12 md:w-6/12 flex justify-end">
                        <div className="w-full hidden md:flex items-center justify-end space-x-12">
                            {HEADER_OPTIONS.map((el, i) => (
                                <div key={i} className="">
                                    <Link href={el.href}>
                                        <a className="text-gray-700 hover:underline">
                                            {el.name}
                                        </a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={handleOpen}
                            className="md:hidden flex focus:outline-none cursor-pointer hover:bg-gray-800 items-center bg-black rounded-xl h-11 w-11 justify-center cursor-pointer select-none text-white">
                            <AiOutlineMenu size={20} className="fill-current text-white text-2xl text-white"/>
                        </button>
                    </div>
                </div>

            </header>
        </>
    )

}