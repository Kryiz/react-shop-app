import { TrashIcon } from "@heroicons/react/24/outline"
import { IOrder } from "../../../lib/interfaces"
import { OrderCard } from "../OrderCard/OrderCard"

interface IClientProps {
    name: string
    phone: string
    email: string
    address?: string
    role?: string
    img: string
    orders: IOrder[]
    clearOrder: () => void
}

export const Client: React.FC<IClientProps> = ({ name, phone, email, address, role, img, orders, clearOrder }) => {
    const hasOrders = orders.length > 0

    const handleClearOrder = () => {
        clearOrder()
    }

    return (
        <>
            <div className="flex flex-col xl:flex-row justify-between gap-6 mb-6">
                <div className="basis-1/2 flex flex-col sm:flex-row gap-6 mb-6 xl:mb-0">
                    <div className="mx-auto w-64 2xl:w-10/12">
                        <img src={img} alt={'Клиент'} className='w-full h-auto rounded-xl' />
                    </div>
                    <div className='w-full'>
                        <h3 className='text-xl md:text-3xl font-bold mb-2'>{name || 'Тестовый Тест Тестович'}</h3>
                        <div className='text-sm text-white bg-amber-600 px-2 rounded-full text-center mb-4'>{role}</div>
                        <p className='text-lg font-bold text-gray-500 mb-2'>{'Ваш телефон :'}</p>
                        <p className='text-lg rounded-lg bg-gray-200 p-2 mb-6'>{phone || '+7 123 456 78 90'}</p>
                        <p className='text-lg font-bold text-gray-500 mb-2'>{'Ваша почта :'}</p>
                        <p className='text-lg rounded-lg bg-gray-200 p-2 mb-6'>{email || 'test@test.ru'}</p>
                        <p className='text-lg font-bold text-gray-500 mb-2'>{'Ваша адрес :'}</p>
                        <p className='text-lg rounded-lg bg-gray-200 p-2'>{address || 'г. Москва, Красная площадь, д. 1'}</p>
                    </div>
                </div>
                <div className='basis-1/2'>
                    <div className="flex justify-between">
                        <h4 className='text-amber-700 text-2xl font-bold text-center mb-3'>{'Ваши заказы :'}</h4>
                        <TrashIcon
                            onClick={handleClearOrder}
                            className="w-5 h-5 text-gray-500 cursor-pointer hover:text-red-500 transition-colors" />
                    </div>
                    <div className="flex flex-col gap-4">
                        {!hasOrders && <p className='text-lg text-gray-500 font-bold text-center'>{'Заказов пока нет...'}</p>}
                        {hasOrders && orders.map(order => {
                            return (
                                <OrderCard key={order.timeStamp} {...order} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}