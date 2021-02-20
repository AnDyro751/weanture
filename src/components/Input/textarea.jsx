export default function InputTextarea({value = "",required=false, name = "", onChange = null, placeholder = "", rows = 8}) {
    return (
        <div className="w-full">
            <textarea value={value} name={name}
                      required={required}
                      onChange={onChange} placeholder={placeholder} rows={rows}
                      className="rounded bg-gray-200 w-full p-3"/>
        </div>
    )
}