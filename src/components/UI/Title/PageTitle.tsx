interface IPageTitleProps {
    title: string
}

export const PageTitle: React.FC<IPageTitleProps> = ({ title }) => {
    return (
        <h2 className='font-montserrat font-bold text-center sm:text-left text-4xl md:text-5xl text-amber-700'>{title}</h2>
    )
}