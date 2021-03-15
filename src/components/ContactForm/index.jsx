import InputText from "../Input/text";
import InputTextarea from "../Input/textarea";
import {useFormik} from 'formik';
import ButtonsPrimary from "../Buttons/primary";
import {validate} from "./validations";
import {CONTACT_EMAIL, CONTACT_PHONE, CONTACT_URL, FORMATTED_PHONE} from "../../utils/info";
import {useState} from 'react';
import {RiWhatsappFill, RiInstagramFill} from 'react-icons/ri';
import {MdEmail} from "react-icons/md";
import {FaPhone} from "react-icons/fa";

export default function ContactForm({withText = true}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: validate,
        onSubmit: values => {
            setLoading(true);
            setError(null);
            setSuccess(false);
            const form = document.querySelector("#contact_form");
            const data = new FormData(form);
            const xhr = new XMLHttpRequest();
            xhr.open(form.method, form.action);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                setLoading(false);
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.reset();
                    formik.resetForm();
                    setError(null);
                    setSuccess(true);
                } else {
                    setSuccess(false);
                    setError("Ha ocurrido un error")
                }
            };
            xhr.send(data);
        },
    });

    return (
        <>
            <div className="w-full relative pb-12">
                <div className="w-full absolute z-0 bg-yellow-100 shadow-2xl md:h-96 h-full"></div>
                <div className="w-11/12 md:w-10/12 mx-auto relative">
                    <h3 className="text-2xl text-gray-900 md:text-3xl font-bold font-title md:py-8 md:mb-0 py-4">Contáctanos</h3>
                    <div className="w-full flex flex-wrap flex-row-reverse md:flex-row md:flex-nowrap">
                        <div className="w-full md:w-6/12 mb-8">
                            <ul className="w-full space-y-4 md:space-y-8">
                                <li className="text-gray-800 flex items-center">
                                    <a
                                        target={"_blank"}
                                        rel={"noopener noreferrer"}
                                        href={`mailto:${CONTACT_EMAIL}`} className="flex items-center">
                                        <MdEmail className={"mr-3"}/> {CONTACT_EMAIL}
                                    </a>
                                </li>
                                <li className="text-gray-800 flex">
                                    <a
                                        target={"_blank"}
                                        rel={"noopener noreferrer"}
                                        href={`https://wa.me/${CONTACT_PHONE}?text=Hola, mi nombre es`}
                                        className="flex items-center"
                                    >
                                        <RiWhatsappFill className={"mr-3"}/> {FORMATTED_PHONE}
                                    </a>
                                </li>
                                <li className="text-gray-800 flex">
                                    <a
                                        target={"_blank"}
                                        rel={"noopener noreferrer"}
                                        href={`tel:${CONTACT_PHONE}`} className="flex items-center">
                                        <FaPhone className={"mr-3"}/> {FORMATTED_PHONE}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-6/12 w-full">
                            <div className="border-2 z-20 bg-white shadow-xl relative border-black px-3 py-4 rounded space-y-4">
                                {/*{*/}
                                {/*    withText &&*/}
                                {/*    <h4 className="text-base">¡Estamos para ayudarte!</h4>*/}
                                {/*}*/}
                                {error &&
                                <h4 className="text-sm text-red-700 font-medium">{error}</h4>
                                }
                                {success &&
                                <h4 className="text-sm text-green-800 font-medium">Tu mensaje se ha enviado. En breve
                                    nos
                                    pondremos en
                                    contacto.</h4>
                                }
                                <form
                                    method={"POST"}
                                    action={CONTACT_URL}
                                    id={"contact_form"}
                                    onSubmit={formik.handleSubmit} className="space-y-4">
                                    <InputText
                                        label={"Nombre"}
                                        error={formik.errors.name}
                                        required={true}
                                        placeholder={"Nombre"}
                                        id={"contact_name"}
                                        name={"name"}
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                    />
                                    <InputText
                                        label={"Correo Electrónico"}
                                        required={true}
                                        error={formik.errors.email}
                                        name={"email"}
                                        onChange={formik.handleChange}
                                        id={"contact_email"}
                                        placeholder={"Correo Electrónico"}
                                        value={formik.values.email}
                                    />
                                    <InputTextarea
                                        id={"contact_comment"}
                                        label={"Comentarios"}
                                        error={formik.errors.message}
                                        required={true}
                                        name={"message"}
                                        onChange={formik.handleChange}
                                        placeholder={"Comentarios"}
                                        value={formik.values.message}
                                    />
                                    <div className="w-full">
                                        <ButtonsPrimary
                                            loading={loading}
                                            text={"Enviar"}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}