interface ISmallButtonProps {
    children: React.ReactNode
    onClick: () => void
    textColor?: string
    bgColor?: string
    disabled?: boolean
}

export const SmallButton: React.FC<ISmallButtonProps> = ({ children, onClick, textColor, bgColor, disabled = false }) => {

    const buttonClass = `h-8 w-8 ${bgColor || 'bg-white'} ${textColor || 'text-black'} rounded shadow-md hover:shadow-sm ${disabled ? 'disabled:shadow-md' : ''}`;

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    )
}