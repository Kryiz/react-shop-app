import { useState } from "react"
import { useAppSelector } from "../../../hooks/redux"
import { useActions } from "../../../hooks/action"

interface IFilterFormProps {
    productName: string
}

export const FilterForm: React.FC<IFilterFormProps> = ({ productName }) => {
    const { pizzasMinPrice, pizzasMaxPrice, sushiMinPrice, sushiMaxPrice } = useAppSelector(state => state.storage)
    const minPrice = productName === 'pizzas' ? pizzasMinPrice : sushiMinPrice
    const maxPrice = productName === 'pizzas' ? pizzasMaxPrice : sushiMaxPrice
    const [valueFrom, setValueFrom] = useState<number>(minPrice)
    const [valueTo, setValueTo] = useState<number>(maxPrice)
    const [danger, setDanger] = useState<boolean>(false)
    const { filterProductsByRangePrice } = useActions()


    const handleValueFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.currentTarget.value.replace(/[^0-9]/g, ''))
        if (value <= maxPrice) {
            setValueFrom(value)
            setDanger(false)
        } else {
            setValueFrom(maxPrice)
            setDanger(true)
        }
    }
    const handleValueTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.replace(/[^0-9]/g, '')
        setValueTo(parseInt(value))
    }

    const handleFilterProducts = () => {
        filterProductsByRangePrice({ productName, valueFrom, valueTo })
    }

    return (
        <form>
            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1 items-start relative">
                    <label className="text-gray-600 -mb-4 ml-2 block relative bg-white px-2">{'От'}</label>
                    <input type='text' placeholder='Search..' className="border rounded-md px-3 pt-3 pb-2 w-full outline-none"
                        value={valueFrom ?? 0}
                        onChange={handleValueFrom}
                        onBlur={() => handleFilterProducts()} />
                    {danger && <p className="text-red-600 text-sm">Минимальная цена должна быть меньше максимальной</p>}
                </div>
                <div className="flex flex-col gap-1 items-start relative">
                    <label className="text-gray-600 -mb-4 ml-2 block relative bg-white px-2">{'До'}</label>
                    <input type='text' placeholder='Search..' className="border rounded-md px-3 pt-3 pb-2 w-full outline-none"
                        value={valueTo ?? 0}
                        onChange={handleValueTo}
                        onBlur={() => handleFilterProducts()} />
                </div>
            </div>
        </form>
    )
}