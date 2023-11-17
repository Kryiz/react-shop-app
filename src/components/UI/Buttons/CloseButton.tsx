import { XMarkIcon } from "@heroicons/react/24/solid"

interface ICloseButtonProps {
    onClose: () => void
    className?: string
}

export const CloseButton : React.FC<ICloseButtonProps> = ({ onClose, className }) => {
    return (
        <button
        onClick={onClose}
        className={className}>
        <XMarkIcon className="w-7 h-7 fill-gray-600 stroke-1 stroke-gray-500" /></button>
    )
}