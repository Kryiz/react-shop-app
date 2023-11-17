import { ChevronDownIcon } from "@heroicons/react/24/solid"

interface IDropdownButtonProps {
    text: string
    dropdown: boolean
    onClick: () => void
}

export const DropdownButton: React.FC<IDropdownButtonProps> = ({ text, dropdown, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 h-[36px]">
            {text}
            <ChevronDownIcon className={"-mr-1 h-4 w-4 text-gray-400 transition-all" + (dropdown ? ' rotate-180' : '')} />
        </button>
    )
}