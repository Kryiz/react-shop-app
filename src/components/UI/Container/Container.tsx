interface IContainerProps {
    children: React.ReactNode
}

export const Container: React.FC<IContainerProps> = ({ children }) => {
    return (
        <div className="container mx-auto h-full pt-4 pb-12 sm:pt-10 sm:pb-20 px-4">
            {children}
        </div>
    )
}