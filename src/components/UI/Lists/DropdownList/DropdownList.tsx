interface IDropdownListProps {
    dropdown: boolean
    children: React.ReactNode
}

export const DropdownList: React.FC<IDropdownListProps> = ({ dropdown = false, children }) => {
    return (
        <>
            {dropdown && (<ul className='absolute right-0 top-[36px] w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-1.5 z-10'>
                {children}
            </ul>)}
        </>
    )
}