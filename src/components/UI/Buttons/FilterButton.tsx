import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid"

interface IFilterButtonProps {
    text: string
    onClick: () => void
}

export const FilterButton : React.FC<IFilterButtonProps> = ({ text, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-950
            shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 h-[36px]">
            <AdjustmentsVerticalIcon className='w-6 h-6' />
            <span className='hidden sm:block'>{text}</span>
        </button>
    )
}