import {FcMenu} from 'react-icons/fc';
import {SITE_NAME} from "../../utils/info";
import Link from 'next/link';

export default function MainHeader() {
    return (
        <header className="w-full flex px-2 items-center bg-white py-1 sticky top-0 py-2">
            <div className="w-10/12">
                <Link href={"/"}>
                    <a className="font-medium px-3 text-lg py-1">
                        {SITE_NAME}
                    </a>
                </Link>
            </div>
            <div className="w-2/12 flex justify-end">
                <div
                    className="flex items-center bg-indigo-200 rounded-xl h-12 w-12 justify-center cursor-pointer select-none text-black">
                    <FcMenu className="fill-current text-black text-2xl text-current"/>
                </div>
            </div>

        </header>
    )
}