export const DesktopFooter = () => {
    const year = new Date().getFullYear()
    const text = `ReactPizza & Anton ©  + ${year}`

    return (
        <div className="sm:block py-3">
            <p className="text-center text-sm">{text}</p>
        </div>
    )
}