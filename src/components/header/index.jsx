import {FcMenu} from 'react-icons/fc'
//
import {SITE_NAME} from "../../utils/info";

export default function MainHeader() {
    return (
        <header className="w-full flex px-2 items-center bg-white shadow py-1">
            <div className="w-2/12 px-2 py-3 cursor-pointer select-none text-black">
                <FcMenu className="fill-current text-black text-2xl text-current"/>
            </div>
            <div className="w-8/12 text-center font-medium text-lg">
                {SITE_NAME}
            </div>
            <div className="w-2/12">
                {/*    Instagram*/}
            </div>
        </header>
    )
}