import { useSelector } from "react-redux"

export const Button = ({ onClick, children }) => {
    const selectedTheme = useSelector((state) => state.theme.selectedTheme)
    return (<>
        <button type="button" onClick={onClick} className={`bg-${selectedTheme}-bg-secondary text-${selectedTheme}-text-secondary`}>
            <p>{children}</p>
        </button>
    </>)
}