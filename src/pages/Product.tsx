import { useMemo } from "react"
import { useParams } from "react-router-dom"
import Helmet from "react-helmet";
import { Container } from "../components/UI/Container/Container"
import { useAppSelector } from "../hooks/redux"
import { useActions } from "../hooks/action"
import { CartButton } from "../components/UI/Buttons/CartButton"
import { IProduct } from "../lib/interfaces"
import { SmallButton } from "../components/UI/Buttons/SmallButton";

const Product: React.FC = () => {
    const actions = useActions();
    const { incrementQuantity, decrementQuantity } = useMemo(() => actions, [actions]);
    const { productId } = useParams<string>()
    const storage = useAppSelector(state => state.storage)
    const cart = useAppSelector(state => state.carts.cart)
    const products = useMemo(() => {
        return [...storage.pizzas, ...storage.sushi]
    }, [storage])
    const product = useMemo(() => {
        return productId ? products.find(product => product.id === parseInt(productId)) || null : null
    }, [products, productId])
    const inCart = productId ? cart.some(item => item.id === parseInt(productId)) : false
    const count = inCart && productId ? cart.find(item => item.id === parseInt(productId))?.count : 0

    const { addItemToCart } = useActions()
    const addToCart = (props: IProduct) => {
        addItemToCart(props)
    }

    return (
        <Container>
            <Helmet
                title={'ReactShop - ' + product?.name}
                meta={[
                    { "name": "description", "content": "Тестовый интернет магазин на React и Redux-Toolkit" }
                ]} />
            {product ? <div className="flex flex-col lg:flex-row gap-4 bg-white text-gray-800 rounded-lg border border-gray-200 shadow-md p-4">
                <div className="basis-1/2 2xl:basis-1/3">
                    <img src={product.image} alt={product?.name} className="object-cover rounded-lg" />
                </div>
                <div className="basis-1/2 2xl:basis-2/3 flex flex-col justify-center text-md sm:text-lg lg:px-4">
                    <h2 className="text-lg sm:text-2xl font-bold mb-2 lg:mb-6">{product.name}</h2>
                    <p className="text-gray-500 font-bold mb-1">{'Состав :'}</p>
                    <p className="mb-2 lg:mb-6">{product.ingredients}</p>
                    <p className="text-gray-500 font-bold mb-1">{'Цена :'}</p>
                    <p className="text-lg sm:text-2xl font-bold mb-2 lg:mb-6">{product.price + ' ₽'}</p>
                    <div className="w-full flex justify-center lg:justify-start">
                        {!inCart && <CartButton message={'Добавить в корзину'} onClick={() => addToCart(product)} />}
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

            </div> :
                <div>{'Товар не найден'}</div>}
        </Container>
    )
}
export default Product