import InputText from "../Input/text";
import InputTextarea from "../Input/textarea";
import {useFormik} from 'formik';
import ButtonsPrimary from "../Buttons/primary";
import {validate} from "./validations";
import {CONTACT_URL} from "../../utils/info";
import {useState} from 'react';

export default function ContactForm({}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: validate,
        onSubmit: values => {
            setLoading(true);
            setError(null)
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
                    setError(null)
                } else {
                    setError("Ha ocurrido un error")
                }
            };
            xhr.send(data);
        },
    });

    return (
        <div className="w-11/12 mx-auto">
            <div className="border-2 border-black px-3 py-4 rounded space-y-4">
                <h3 className="text-2xl font-medium">Contáctanos</h3>
                {error &&
                <h4 className="text-sm text-red-700 font-medium">{error}</h4>
                }
                <form
                    method={"POST"}
                    action={CONTACT_URL}
                    id={"contact_form"}
                    onSubmit={formik.handleSubmit} className="space-y-4">
                    <InputText
                        error={formik.errors.name}
                        required={true}
                        placeholder={"Nombre"}
                        name={"name"}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    <InputText
                        required={true}
                        error={formik.errors.email}
                        name={"email"}
                        onChange={formik.handleChange}
                        placeholder={"Correo Electrónico"}
                        value={formik.values.email}
                    />
                    <InputTextarea
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
    )
}