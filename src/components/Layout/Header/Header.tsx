import { useAppSelector } from '../../../hooks/redux';
import { LayoutContainer } from '../../UI/Container/LayoutContainer';
import { useState } from 'react';
import ClientImg from '../../../assets/client.jpg'
import AdminImg from '../../../assets/admin.jpg'
import GuestImg from '../../../assets/guest.jpg'
import { USER_ROLE } from '../../../lib/constants';
import { DesktopHeader } from './DesktopHeader/DesktopHeader';
import { MobileHeader } from './MobileHeader/MobileHeader';

export const Header = () => {
    const { cart, user } = useAppSelector(state => state.carts)
    const [isOpenAuth, setIsOpenAuth] = useState<boolean>(false)
    const isAdmin = !!user && user.role?.includes(USER_ROLE.Admin)

    const image = isAdmin ? AdminImg : user.role === USER_ROLE.Client ? ClientImg : GuestImg;


    return (
        <header className='shadow-md font-nunito text-white bg-gradient-to-l from-amber-700 to-amber-500'>
            <LayoutContainer>
                <DesktopHeader image={image} cart={cart} isAdmin={isAdmin} isOpenAuth={isOpenAuth} setIsOpenAuth={setIsOpenAuth} />
                <MobileHeader />
            </LayoutContainer>
        </header >
    )
}