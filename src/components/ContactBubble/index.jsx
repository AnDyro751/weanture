import {FaWhatsapp} from 'react-icons/fa'
import {CONTACT_PHONE} from "../../utils/info";

export default function ContactBubble({}) {
    return (
        <a
            href={`https://wa.me/${CONTACT_PHONE}?text=Me%20interesa%20el%20auto%20que%20estás%20vendiendo`}
            target={"_blank"}
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full fixed bg-whatsapp items-center flex shadow bottom-12 right-6 justify-center">
            <FaWhatsapp className="text-white fill-current text-current" size={30}/>
        </a>
    )
}