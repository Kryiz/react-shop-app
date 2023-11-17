import { useAppSelector } from "../hooks/redux"
import { useActions } from "../hooks/action"
import { CartCard } from "../components/Cart/CartCard/CartCard"
import { CartForm } from "../components/Cart/CartForm/CartForm"
import { Container } from "../components/UI/Container/Container"

const Cart = () => {
    const { cart } = useAppSelector(state => state.carts)
    const { incrementQuantity, decrementQuantity, removeItemFromCart } = useActions()

    return (
        <Container>
            {cart.length === 0 ? <div className="font-bold text-4xl">{'Корзина пуста'}</div> :
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="basis-1/2 mb-8 lg:mb-0">
                        <div className="inline-flex flex-wrap  text-3xl md:text-4xl font-montserrat font-semibold text-amber-700 text-center lg:text-left mb-4 md:mb-7">Заказ на доставку</div>
                        <CartForm />
                    </div>
                    <div className="basis-1/2 flex flex-col bg-white text-gray-800 rounded-lg border border-gray-200 shadow-md py-4 pr-4 pl-6">
                        <div className="text-xl font-montserrat font-bold text-gray-800 text-left mb-5">{'Состав заказа'}</div>
                        <div className="flex flex-col gap-4 mb-5">
                            {cart.map(item =>
                                <CartCard
                                    key={item.id}
                                    {...item}
                                    incrementQuantity={incrementQuantity}
                                    decrementQuantity={decrementQuantity}
                                    removeItemFromCart={removeItemFromCart}
                                />)}
                        </div>
                        <div className="text-xl text-gray-800 text-right mt-auto"> {'Итого :'} <span className="font-semibold">
                            {cart.reduce((acc, item) => acc + item.count * item.price, 0)} ₽</span>
                        </div>
                    </div>
                </div>}
        </Container>
    )
}
export default Cart