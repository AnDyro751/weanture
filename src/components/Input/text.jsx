export default function InputText({label = null, error = null, required = false, name = "", id = "", type = "text", value = "", placeholder = "", onChange = null}) {
    return (
        <div className="w-full">
            {label &&
            <label htmlFor={id}>{label}</label>
            }
            <input type={type} id={id} value={value}
                   name={name}
                   required={required}
                   onChange={onChange}
                   className="bg-gray-100 w-full rounded px-4 py-4 border-2 border-black"
                   placeholder={placeholder}/>
            {/*error={formik.errors.name}*/}
            {error &&
            <p className="mt-2 text-red-700 font-medium text-sm">{error}</p>
            }
        </div>
    )
}