import { useSelector } from "react-redux"

export const Input = ({ label, register, errors, required }) => {
    const selectedTheme = useSelector((state) => state.theme.selectedTheme)
    return (<>
        <div className="relative z-0 w-full mt-6 group">
            <input id={label} name={label} {...register(label, { required: required ? `Field is required *` : false })}  className={`block py-2 px-1 w-full text-sm text-${selectedTheme}-text bg-transparent border rounded ${errors[label] ? `border-${selectedTheme}-warning focus:border-${selectedTheme}-warning` : `border-${selectedTheme}-text-secondary focus:border-${selectedTheme}-primary`} appearance-none focus:outline-none focus:ring-0 peer`} placeholder=" " />
            <label htmlFor={label} className={`peer-focus:font-medium absolute text-sm ${errors[label] ? `text-${selectedTheme}-warning peer-focus:text-${selectedTheme}-warning` : `text-${selectedTheme}-text-secondary peer-focus:text-${selectedTheme}-primary`} duration-300 transform -translate-y-7 scale-75 top-2 left-1 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7`}>{label}</label>            
            <span className={`absolute text-sm -top-5 right-0 text-${selectedTheme}-text-secondary`}>{errors[label] && <span>{errors[label].message}</span>}</span>
        </div>
    </>)
}