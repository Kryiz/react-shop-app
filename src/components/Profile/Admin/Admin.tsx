import { IOrder } from "../../../lib/interfaces"
import { OrderCard } from "../OrderCard/OrderCard"
import { Button } from "../../UI/Buttons/Button"

interface IAdminProps {
    name: string
    phone: string
    email: string
    address?: string
    role?: string
    img: string
    orders: IOrder[]
    clearOrder: () => void
    clearCart: () => void
}

export const Admin: React.FC<IAdminProps> = ({ name, phone, email, address, role, img, orders, clearOrder, clearCart }) => {
    const ordersCount = orders.length
    const hasOrders = ordersCount > 0
    const totalOrdersProductsPositions = orders.reduce((acc, order) => acc + order.cart.length, 0)
    const totalOrdersProductsCount = orders.reduce((acc, order) => acc + order.cart.reduce((acc, item) => acc + item.count, 0), 0)
    const totalOrdersPrice = orders.reduce((acc, order) => acc + order.totalPrice, 0)
    const totalAverageCheck = hasOrders ? orders.reduce((acc, order) => acc + order.totalPrice, 0) / orders.length : 0

    const handleClearOrder = () => {
        clearOrder()
    }
    const handleClearCart = () => {
        clearCart()
    }

    return (
        <>
            <div className="flex flex-col xl:flex-row justify-between gap-6 mb-6">
                <div className="basis-2/3 flex flex-col sm:flex-row gap-6 mb-6 xl:mb-0">
                    <div className="mx-auto w-64 2xl:w-10/12">
                        <img src={img} alt={'Администратор'} className='w-full h-auto rounded-xl' />
                    </div>
                    <div className="w-full">
                        <h3 className='text-3xl font-bold mb-2'>{name || 'Администратор'}</h3>
                        <div className='text-sm text-white bg-amber-600 px-2 rounded-full text-center mb-4'>{role}</div>
                        <p className='text-lg font-bold text-gray-500 mb-2'>{'Ваш телефон :'}</p>
                        <p className='text-lg rounded-lg bg-gray-200 p-2 mb-6'>{phone || '+7 123 456 78 90'}</p>
                        <p className='text-lg font-bold text-gray-500 mb-2'>{'Ваша почта :'}</p>
                        <p className='text-lg rounded-lg bg-gray-200 p-2 mb-6'>{email || 'test@test.ru'}</p>
                        <p className='text-lg font-bold text-gray-500 mb-2'>{'Ваша адрес :'}</p>
                        <p className='text-lg rounded-lg bg-gray-200 p-2'>{address || 'г. Москва, Красная площадь, д. 1'}</p>
                    </div>
                </div>
                <div className="basis-1/3 mb-4">
                    <div className="mb-4">
                        <h4 className='text-amber-700 text-2xl font-bold mb-3'>{'Общая статистика :'}</h4>
                        <p className="text-lg sm:text-xl mb-2">Всего заказов: <span className="font-bold">{ordersCount}</span></p>
                        <p className="text-lg sm:text-xl mb-2">Всего товаров в заказах: <span className="font-bold">{totalOrdersProductsPositions}</span></p>
                        <p className="text-lg sm:text-xl mb-2">Общее кол-во товаров : <span className="font-bold">{totalOrdersProductsCount}</span></p>
                        <p className="text-lg sm:text-xl mb-2">Общая сумма заказов: <span className="font-bold">{totalOrdersPrice + " ₽"}</span></p>
                        <p className="text-lg sm:text-xl mb-2">Средний чек: <span className="font-bold">{totalAverageCheck + " ₽"}</span></p>
                    </div>
                    <div className="flex gap-4">
                        <Button text={'Очистить все заказы'} onClick={handleClearOrder} />
                        <Button text={'Очистить корзину'} onClick={handleClearCart} />
                    </div>
                </div>
            </div>
            <div>
                <h4 className='text-amber-700 text-2xl font-bold mb-3'>{'Вce заказы :'}</h4>
                <div className="flex flex-col gap-4">
                    {!hasOrders && <p className='text-lg text-gray-500 font-bold text-center'>{'Заказов пока нет...'}</p>}
                    {hasOrders && orders.map(order => {
                        return (
                            <OrderCard key={order.timeStamp} {...order} />
                        )
                    })}
                </div>
            </div >
        </>
    )
}