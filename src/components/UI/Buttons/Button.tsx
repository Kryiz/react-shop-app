interface IButtonProps {
    text: string
    disabled?: boolean
    onClick: () => void
}

export const Button: React.FC<IButtonProps> = ({ text, disabled = false, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className="font-semibold rounded-md hover:text-amber-700  hover:border-amber-700 hover:bg-white
            bg-amber-700 text-white  opacity-100 py-2 px-3 border transition-all">{text}</button>
    )
}