interface IFormButtonProps {
    text: string
    disabled: boolean
    condition: boolean
}

export const FormButton: React.FC<IFormButtonProps> = ({ text, disabled, condition }) => {
    return (
        <button
        disabled={disabled}
        type="submit"
        className={"w-full sm:w-fit font-semibold rounded-md py-2 px-4 border transition-all " + (condition ?
            "hover:text-amber-700  hover:border-amber-700 hover:bg-white bg-amber-700 text-white  opacity-100" :
            "text-amber-700  border-amber-700 bg-white opacity-50")}>{text}</button>
    )
}