import { Link } from "react-router-dom"
import { ROUTES } from "../../../../lib/routes"
import { Search } from "../Search/Search";
import RPlogo from '../../../../assets/logo.png';


export const MobileHeader: React.FC = () => {
    return (
        <div className='flex md:hidden items-center justify-between  gap-3 py-2'>
            <Link to={ROUTES.base} className='w-20 shrink-0'>
                <img src={RPlogo} alt={'ReactPizza'} />
            </Link>
            <Search />
        </div>
    )
}