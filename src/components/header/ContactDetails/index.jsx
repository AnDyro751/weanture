import {CONTACT_PHONE, FORMATTED_PHONE} from "../../../utils/info";
import {FaWhatsapp} from 'react-icons/fa'

export default function ContactDetails({}) {
    return (
        <div className="w-full bg-black relative py-2">
            <div className="w-11/12 mx-auto bg-black flex">
                <a
                    href={`https://wa.me/${CONTACT_PHONE}?text=Hola, mi nombre es`}
                    className="flex items-center text-white text-sm font-medium py-1">
                    <FaWhatsapp className={"text-white mr-2"}/>{FORMATTED_PHONE}
                </a>
            </div>
        </div>
    )
}