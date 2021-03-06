export default function InputTextarea({value = "", required = false,id="", name = "", onChange = null, placeholder = "", rows = 8, label = null}) {
    return (
        <div className="w-full">
            {label &&
            <label className="text-gray-700 text-sm" htmlFor={id}>{label}</label>
            }
            <textarea value={value} name={name}
                      id={id}
                      required={required}
                      onChange={onChange} placeholder={placeholder} rows={rows}
                      className="rounded mt-2 bg-gray-100 border-2 border-black w-full p-3"/>
        </div>
    )
}