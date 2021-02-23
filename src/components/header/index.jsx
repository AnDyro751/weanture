import {FcMenu} from 'react-icons/fc';
import {SITE_NAME} from "../../utils/info";
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {throttle} from 'lodash'
import Image from 'next/image'
import ContactDetails from "./ContactDetails";

export default function MainHeader({transparent = false}) {

    const [activeHeader, setActiveHeader] = useState(false);

    useEffect(() => {
        // console.log(throttle, "SS")
        window.addEventListener("scroll", throttle(boxHeader, 350));
        setNewStatus()
        return () => {
            boxHeader()
        }
    }, []);

    const boxHeader = () => {
        setNewStatus()
    }

    const setNewStatus = () => {
        console.log("HOLA new status");
        if (window.scrollY > 100) {
            setActiveHeader(true);
        } else {
            setActiveHeader(false);
        }
    }

    return (
        <>
            <ContactDetails/>
            <header
                className={`w-full flex items-center flex-wrap z-40 sticky top-0 ${activeHeader ? "shadow bg-white" : ""} ${transparent ? "" : "bg-white"}`}>
                <div className="w-11/12 mx-auto flex items-center py-1 py-2">
                    <div className="w-10/12 flex items-center space-x-4">
                        <div className="relative h-7 w-7">
                            <Link href={"/"}>
                                <a>
                                    <Image
                                        src="/logo.png"
                                        objectFit={"contain"}
                                        title={`${SITE_NAME} logo`}
                                        alt={`${SITE_NAME} logo`}
                                        width={101}
                                        height={101}
                                    />
                                </a>
                            </Link>
                        </div>
                        <Link href={"/"}>
                            <a className="font-bold text-lg py-1">
                                {SITE_NAME}
                            </a>
                        </Link>
                    </div>
                    <div className="w-2/12 flex justify-end">
                        <div
                            className="flex items-center bg-indigo-200 rounded-xl h-11 w-11 justify-center cursor-pointer select-none text-black">
                            <FcMenu className="fill-current text-black text-2xl text-current"/>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )

}