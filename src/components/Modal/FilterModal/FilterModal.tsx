import { useMemo, useState } from "react"
import { useAppSelector } from "../../../hooks/redux"
import { useActions } from "../../../hooks/action"
import { Portal } from "../Portal"
import { FilterForm } from "../../UI/Form/FilterForm"
import { CloseButton } from "../../UI/Buttons/CloseButton"

interface IFilterModalProps {
    productName: string
    onClose: () => void
}

export const FilterModal: React.FC<IFilterModalProps> = ({ productName, onClose }) => {
    const { pizzasIngredients, sushiIngredients, pizzasIngSelected, sushiIngSelected } = useAppSelector(state => state.storage)
    const { filterProductsByIngedients, resetFilterProducts, resetFilterIngredients, setFilteredIngredients } = useActions()
    const ingredients = useMemo(() => productName === 'pizzas' ? pizzasIngredients : sushiIngredients, [productName, pizzasIngredients, sushiIngredients])
    const selectedIngredients = useMemo(() => productName === 'pizzas' ? pizzasIngSelected : sushiIngSelected, [productName, pizzasIngSelected, sushiIngSelected])
    const [activeIngredient, setActiveIngredient] = useState<string | null>(selectedIngredients)

    const handleClick = (productName: string, ingredient: string) => {
        filterProductsByIngedients({ productName, ingredient })
        setFilteredIngredients({ productName, ingredient })
        if (activeIngredient === ingredient) {
            setActiveIngredient(null)
            resetFilterIngredients(productName)
            return
        }
        setActiveIngredient(ingredient)
    }

    return (
        <Portal onClose={onClose}>
            <div className={"fixed z-10 top-0 right-0 w-screen sm:w-96 h-full bg-white shadow-2xl py-4 px-4 sm:px-6"}>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-2xl">{'Фильтры'}</h3>
                    <button
                        className="text-md text-amber-600 hover:text-red-300 transition-all underline underline-offset-4 decoration-dotted align-bottom"
                        onClick={() => resetFilterProducts(productName)}>
                        {'Сбросить'}
                    </button>
                    <CloseButton onClose={onClose} className="hover:rotate-90 transition-all" />
                </div>
                <div className="mb-6">
                    <h3 className="font-bold text-xl mb-4">{'Цены :'}</h3>
                    <FilterForm productName={productName} />
                </div>
                <div>
                    <h3 className="font-bold text-xl mb-4">{'Ингидиенты :'}</h3>
                    <div className='gap-x-1 gap-y-1.5 flex flex-wrap'>
                        {ingredients.map((ingredient: string) => (
                            <div
                                key={ingredient}
                                onClick={() => handleClick(productName, ingredient)}
                                className={'rounded-full px-3 cursor-pointer' + (activeIngredient === ingredient ? ' bg-amber-600 text-white' : ' text-gray-500  bg-gray-200')}>
                                {ingredient}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Portal>
    )
}