import { useCallback, useEffect, useState } from "react"
import { useActions } from "../../../../hooks/action"
import { useAppSelector } from "../../../../hooks/redux"
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

export const Search = () => {
    const [search, setSearch] = useState<string>('')
    const [dropdown, setDropdown] = useState<boolean>(false)
    const { searchProducts } = useActions()
    const searchResults = useAppSelector(state => state.storage.searchResults)

    const handleSearch = useCallback((value: string) => {
        setSearch(value)
        if (value.length > 0) {
            searchProducts(search)
        }
    }, [searchProducts, search])

    useEffect(() => {
        setDropdown(!!search)
    }, [search])

    const clearSearch = useCallback(() => {
        setSearch('')
    }, [])
    return (
        <div className="h-10 my-auto grid place-items-center relative">
            <input
                type="text"
                placeholder="Поиск"
                className="w-full h-full shadow-inner rounded-3xl outline-none text-lg text-gray-950 pl-10 pr-4 peer focus:pl-4 transition-all duration-700"
                value={search}
                onChange={e => handleSearch(e.target.value)}
            />
            <MagnifyingGlassIcon className="absolute left-2 top-2 w-6 h-6 text-gray-400 opacity-100 peer-focus:opacity-0 peer-focus:w-0 transition-all ease-out duration-500" />
            <button
                className="absolute right-2 top-2 w-0 h-6 cursor-pointer text-gray-400 opacity-0
                    peer-focus:opacity-100 peer-focus:w-6 transition-all ease-in-out duration-500"
                onClick={clearSearch}>
                <XMarkIcon
                    className="w-4 h-4" />
            </button>
            {dropdown &&
                <div
                    className="w-72 absolute top-11 right-0 text-gray-800 bg-white rounded-md shadow-md py-1 transition-all z-10">
                    {searchResults && searchResults.length > 0 ? searchResults.map(product => (
                        <Link key={product.id} to={`/product/${product.id}`}
                            className="block py-1 px-3 hover:bg-gray-100 cursor-pointer">{product.name}</Link>)) :
                        <div className="py-1 px-2">Ничего не найдено</div>}
                </div>}
        </div>
    )
}