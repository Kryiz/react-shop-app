interface IUnderlinedLinkProps {
    children: React.ReactNode
    href: string
    target?: string
}

export const UnderlinedLink: React.FC<IUnderlinedLinkProps> = ({ children, href, target='_blank' }) => {
    return (
        <a
            href={href}
            target={target}
            className={`relative w-fit inline-flex after:block after:content-[''] after:bottom-0 after:absolute after:h-[3px] after:bg-amber-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}>
            {children}
        </a >
    )
}