import { useMemo, useState } from "react"
import { useAppSelector } from "../../../hooks/redux"
import { USER_ROLE } from "../../../lib/constants"
import { DesktopFooter } from "./DesktopFooter/DesktopFooter"
import { MobileFooter } from "./MobileFooter/MobileFooter"
import { LayoutContainer } from "../../UI/Container/LayoutContainer"
import AdminImg from '../../../assets/admin.jpg'
import GuestImg from '../../../assets/guest.jpg'
import ClientImg from '../../../assets/client.jpg'

export const Footer = () => {
    const { cart, user } = useAppSelector(state => state.carts)
    const [isOpenAuth, setIsOpenAuth] = useState<boolean>(false)

    const isAdmin = useMemo(() => !!user && user.role?.includes(USER_ROLE.Admin), [user])
    const image = useMemo(() => isAdmin ? AdminImg : user.role === USER_ROLE.Client ? ClientImg : GuestImg, [user, isAdmin])

    return (
        <footer className="shadow-md font-nunito text-white bg-amber-700">
            <LayoutContainer>
                <DesktopFooter />
                <MobileFooter cart={cart} image={image} isOpenAuth={isOpenAuth} setIsOpenAuth={setIsOpenAuth} />
            </LayoutContainer>
        </footer>
    )
}