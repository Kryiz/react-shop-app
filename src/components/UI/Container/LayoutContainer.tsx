interface ILayoutContainerProps {
    children: React.ReactNode
}

export const LayoutContainer: React.FC<ILayoutContainerProps> = ({ children }) => {
    return (
        <div className="container mx-auto px-4">
            {children}
        </div>
    )
}