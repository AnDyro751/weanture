export default function InputTextarea({value = "",required=false, name = "", onChange = null, placeholder = "", rows = 8}) {
    return (
        <div className="w-full">
            <textarea value={value} name={name}
                      required={required}
                      onChange={onChange} placeholder={placeholder} rows={rows}
                      className="rounded bg-gray-100 border-2 border-black w-full p-3"/>
        </div>
    )
}