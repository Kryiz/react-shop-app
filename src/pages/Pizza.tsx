import { useMemo, useState } from 'react'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useActions } from '../hooks/action';
import { useAppSelector } from '../hooks/redux';
import Helmet from "react-helmet";
import { ProductCard } from '../components/ProductCard/ProductCard'
import { PageTitle } from '../components/UI/Title/PageTitle';
import { Container } from '../components/UI/Container/Container';
import { DropdownButton } from '../components/UI/Buttons/DropdownButton';
import { DropdownList } from '../components/UI/Lists/DropdownList/DropdownList';
import { FilterButton } from '../components/UI/Buttons/FilterButton';
import { FilterModal } from '../components/Modal/FilterModal/FilterModal';

interface IPizzaProps {
    title: string
    error: FetchBaseQueryError | SerializedError | undefined
}
const Pizza: React.FC<IPizzaProps> = ({ title, error }) => {
    const [dropdown, setDropdown] = useState<boolean>(false)
    const [showFilter, setShowFilter] = useState<boolean>(false)
    const { pizzas, pizzasFiltered } = useAppSelector(state => state.storage)
    const { filterProductsByPriceAsc } = useActions()

    const products = useMemo(() => pizzasFiltered.length ? pizzasFiltered : pizzas, [pizzas, pizzasFiltered])

    return (
        <Container>
            <Helmet
                title={'ReactShop - пиццы'}
                meta={[
                    { "name": "description", "content": "Тестовый интернет магазин на React и Redux-Toolkit" }
                ]} />
            <div className='flex flex-wrap items-center justify-between gap-4 mb-2 sm:mb-6'>
                <PageTitle title={title} />
                <div className='flex items-end gap-2 sm:gap-4 ml-auto'>
                    <FilterButton text={'Фильтры'} onClick={() => setShowFilter(!showFilter)} />
                    {showFilter &&
                        <FilterModal onClose={() => setShowFilter(!showFilter)} productName={'pizzas'} />}
                    <div className='relative'>
                        <DropdownButton text={'Сортировать'} dropdown={dropdown} onClick={() => setDropdown(!dropdown)} />
                        <DropdownList dropdown={dropdown}>
                            <li className='py-1.5 px-3 hover:bg-gray-100 cursor-pointer' onClick={() => filterProductsByPriceAsc({ productName: 'pizzas', sort: 'cheap' })}>Сначала недорогие</li>
                            <li className='py-1.5 px-3 hover:bg-gray-100 cursor-pointer' onClick={() => filterProductsByPriceAsc({ productName: 'pizzas', sort: 'expensive' })}>Сначала дороже</li>
                        </DropdownList>
                    </div>
                </div>
            </div>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {error && (<div>{'Произошла ошибка'}</div>)}
                {products && products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </Container>
    )
}
export default Pizza