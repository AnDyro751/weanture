import {CONTACT_EMAIL, CONTACT_PHONE} from "../../utils/info";
import {FaPhone} from "react-icons/fa";
import {MdEmail} from 'react-icons/md';
import {RiWhatsappFill} from 'react-icons/ri';

export default function Footer({}) {
    return (
        <div className="w-full bg-gray-100 mt-10 py-8">
            <div className="w-11/12 mx-auto flex flex-wrap space-y-8">
                <div className="w-full">
                    <h5 className="font-medium text-lg">
                        Información
                    </h5>
                    <ul className="w-full space-y-4 mt-3">
                        <li className="text-gray-800">
                            Politica de privacidad
                        </li>
                        <li className="text-gray-800">
                            Cookies
                        </li>
                    </ul>
                </div>
                <div className="w-full">
                    <h5 className="font-medium text-lg">
                        Contacto
                    </h5>
                    <ul className="w-full space-y-4 mt-3">
                        <li className="text-gray-800 flex items-center">
                            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center">
                                <MdEmail className={"mr-3"}/> {CONTACT_EMAIL}
                            </a>
                        </li>
                        <li className="text-gray-800 flex">
                            <a href={`phone:${CONTACT_PHONE}`} className="flex items-center">
                                <RiWhatsappFill className={"mr-3"}/> {CONTACT_PHONE}
                            </a>
                        </li>
                        <li className="text-gray-800 flex">
                            <a href={`phone:${CONTACT_PHONE}`} className="flex items-center">
                                <FaPhone className={"mr-3"}/> {CONTACT_PHONE}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}