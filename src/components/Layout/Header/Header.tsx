import { useAppSelector } from '../../../hooks/redux';
import { LayoutContainer } from '../../UI/Container/LayoutContainer';
import { useEffect, useState } from 'react';
import { USER_ROLE } from '../../../lib/constants';
import { DesktopHeader } from './DesktopHeader/DesktopHeader';
import { MobileHeader } from './MobileHeader/MobileHeader';

export const Header = () => {
    const { cart, user } = useAppSelector(state => state.carts)
    const [image, setImage] = useState<string>('');
    const [isOpenAuth, setIsOpenAuth] = useState<boolean>(false)
    const isAdmin = !!user && user.role?.includes(USER_ROLE.Admin)

    useEffect(() => {
        const loadImage = async () => {
            let imagePath = '';
            if (isAdmin) {
                const { default: adminImg } = await import('../../../assets/admin.jpg');
                imagePath = adminImg;
            } else if (user.role === USER_ROLE.Client) {
                const { default: clientImg } = await import('../../../assets/client.jpg');
                imagePath = clientImg;
            } else {
                const { default: guestImg } = await import('../../../assets/guest.jpg');
                imagePath = guestImg;
            }
            setImage(imagePath);
        };
        loadImage();
    }, [isAdmin, user.role]);
    
    return (

        <header className='shadow-md font-nunito text-white bg-gradient-to-l from-amber-700 to-amber-500'>
            <LayoutContainer>
                <DesktopHeader image={image} cart={cart} isAdmin={isAdmin} isOpenAuth={isOpenAuth} setIsOpenAuth={setIsOpenAuth} />
                <MobileHeader />
            </LayoutContainer>
        </header >
    )
}