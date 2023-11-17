import { useActions } from "../../hooks/action";
import { CartButton } from "../UI/Buttons/CartButton";
import { useAppSelector } from "../../hooks/redux";
import { SmallButton } from "../UI/Buttons/SmallButton";
import { Link } from "react-router-dom";

interface IProductCardProps {
    id: number
    name: string
    ingredients: string
    image: string
    count: number
    price: number
}

export const ProductCard: React.FC<IProductCardProps> = (product) => {
    const { addItemToCart, incrementQuantity, decrementQuantity } = useActions()
    const { cart } = useAppSelector(state => state.carts)
    const inCart = cart.some(item => item.id === product.id)
    const count = inCart ? cart.find(item => item.id === product.id)?.count : 0

    return (
        <div className="relative bg-white text-gray-800 rounded-lg border border-gray-200 shadow-md transition-colors p-4 group">
            <div key={product.id} className="h-full flex flex-col">
                <Link to={`/product/${product.id}`} className="h-full flex flex-col">
                    <div className="rounded-lg sm:rounded overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="font-bold text-lg md:text-2xl pt-3 pb-2">{product.name}</h3>
                    <p className="text-sm leading-5 text-gray-600 pb-6 flex-auto">{product.ingredients}</p>
                </Link>
                <div className="flex items-center justify-between relative">
                    <div className="font-bold text-xl">{product.price + " ₽"}</div>
                </div>
            </div>
            <div className="absolute bottom-4 right-4">
                {!inCart && <CartButton onClick={() => addItemToCart(product)} />}
                {inCart &&
                    <div className="flex items-center gap-1 relative pt-4 group">
                        <SmallButton
                            onClick={() => decrementQuantity({ scenario: 'remove', id: product.id })}
                            textColor={'text-white'}
                            bgColor={'bg-amber-600'} >-</SmallButton>
                        <div className="flex flex-col text-center">
                            <span className="font-semibold w-8 leading-4">{count}</span>
                            <span className="text-xs leading-3">шт.</span>
                        </div>
                        <SmallButton
                            onClick={() => incrementQuantity(product.id)}
                            textColor={'text-white'}
                            bgColor={'bg-amber-600'} >+</SmallButton>
                        <span className="text-sm text-gray-400 leading-3 absolute top-0 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{'В корзине'}</span>
                    </div>}
            </div>
        </div>
    )
}