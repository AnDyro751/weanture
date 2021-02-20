import {CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_MEDIA} from "../../utils/info";
import {FaPhone, FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";
import {MdEmail} from 'react-icons/md';
import {RiWhatsappFill, RiInstagramFill} from 'react-icons/ri';

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
                <div className="w-full">
                    <h5 className="font-medium text-lg">
                        Social
                    </h5>
                    <ul className="w-full space-y-4 mt-3">
                        <li className="text-gray-800 flex items-center">
                            <a href={`https://facebook.com/${SOCIAL_MEDIA.facebook}`} className="flex items-center">
                                <FaFacebookF className={"mr-3"}/> /{SOCIAL_MEDIA.facebook}
                            </a>
                        </li>
                        <li className="text-gray-800 flex">
                            <a href={`https://instagram.com/${SOCIAL_MEDIA.instagram}`} className="flex items-center">
                                <RiInstagramFill className={"mr-3"}/> {SOCIAL_MEDIA.instagram}
                            </a>
                        </li>
                        <li className="text-gray-800 flex">
                            <a href={`https://twitter.com/${SOCIAL_MEDIA.twitter}`} className="flex items-center">
                                <FaTwitter className={"mr-3"}/> {SOCIAL_MEDIA.twitter}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}