import {CONTACT_PHONE} from "../../../utils/info";
import {HiPhone} from 'react-icons/hi'

export default function ContactDetails({}) {
    return (
        <div className="w-full bg-black relative py-3">
            <div className="w-11/12 mx-auto bg-black">
                <a href={`tel:${CONTACT_PHONE}`} className="flex items-center text-white text-sm font-medium">
                    <HiPhone className={"text-white mr-2"}/>{CONTACT_PHONE}
                </a>
            </div>
        </div>
    )
}