import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import { useActions } from "../../../hooks/action";
import { IOrder } from "../../../lib/interfaces";
import { yupResolver } from '@hookform/resolvers/yup'
import { InputMask } from '@react-input/mask';
import * as yup from "yup"
import { FormButton } from "../../UI/Buttons/FormButton";

interface IFormInput {
    name: string
    phone: string
    email: string
    address?: string
}
const DefaultValues: IFormInput = {
    name: '',
    phone: '',
    email: '',
    address: '',
}

const schema = yup.object({
    name: yup.string().required('Обязательное поле').min(3, 'Минимум 3 символа').max(30, 'Максимум 30 символов'),
    phone: yup.string().required('Обязательное поле').min(16, 'Обязательное поле').max(16, 'Максимум 16 цифр'),
    email: yup.string().email('Некорректная почта').required('Обязательное поле'),
    address: yup.string().max(255, 'Максимум 30 символов'),
}).required()

export const CartForm: React.FC = () => {
    const { cart } = useAppSelector(state => state.carts)
    const navigate = useNavigate()
    const { addUser, addOrder, clearCart } = useActions()
    const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm<IFormInput>({
        defaultValues: DefaultValues, resolver: yupResolver(schema), mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const order: IOrder = {
            user: data,
            cart: cart,
            totalPrice: cart.reduce((acc, item) => acc + item.price * item.count, 0),
            timeStamp: Date.now(),
        }
        addUser(data)
        addOrder(order)
        clearCart()
        reset({})
        navigate('success')
    }
    const modify = (input: string) => {
        return { mask: input[0] === '0' ? '+7 (___) ___-__-__' : undefined };
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row gap-2 items-start mb-2 sm:mb-5 relative">
                    <label htmlFor="name" className={"basis-1/4 text-left text-gray-800 text-lg font-bold"}>Имя</label>
                    <input
                        {...register("name")}
                        name="name"
                        type="text"
                        placeholder="Имя"
                        className={"basis-2/3 w-full border rounded px-3 py-2 " + (errors.name ? "border-red-500" : "")} />
                    {errors.name && (<div className="text-sm text-red-600 absolute -bottom-5 start-2/4">{errors.name?.message}</div>)}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 items-start mb-2 sm:mb-5 relative">
                    <label htmlFor="name" className="basis-1/4 text-left text-lg text-gray-800 font-bold">Номер телефона</label>
                    <InputMask
                        {...register("phone")}
                        placeholder="Номер телефона"
                        className={"basis-2/3 w-full border rounded px-3 py-2 " + (errors.phone ? "border-red-500" : "")}
                        mask="+7 ___ ___ __ __" replacement={{ _: /\d/ }} modify={modify} />
                    {errors.phone && (<div className="text-sm text-red-600 absolute -bottom-5 start-2/4">{errors.phone?.message}</div>)}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 items-start mb-2 sm:mb-5 relative">
                    <label htmlFor="name" className="basis-1/4 text-left text-lg text-gray-800 font-bold">Email</label>
                    <input
                        {...register("email")}
                        name="email"
                        type="email"
                        placeholder="Email"
                        className={"basis-2/3 w-full border rounded px-3 py-2 " + (errors.email ? "border-red-500" : "")} />
                    {errors.email && (<div className="text-sm text-red-600 absolute -bottom-5 start-2/4">{errors.email?.message}</div>)}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 items-start mb-2 sm:mb-5 relative">
                    <label htmlFor="name" className="basis-1/4 text-left text-lg text-gray-800 font-bold">Адрес доставки</label>
                    <textarea
                        {...register("address")}
                        placeholder="Адрес доставки"
                        name="address"
                        className={"basis-2/3 w-full border rounded px-3 py-2 mb-2 " + (errors.address ? "border-red-500" : "")} />
                    {errors.address && (<div className="text-sm text-red-600 absolute -bottom-5 start-2/4">{errors.address?.message}</div>)}
                </div>
                <div className="flex justify-center">
                    <FormButton text={'Оформить заказ'} disabled={!isDirty || !isValid} condition={isValid} />
                </div>
            </form>
        </div>
    )
}