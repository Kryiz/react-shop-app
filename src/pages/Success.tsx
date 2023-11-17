import { useEffect, useState } from "react"
import { Container } from "../components/UI/Container/Container"
import { Link, useNavigate } from "react-router-dom"
import { ROUTES } from '../lib/routes';

const Success = () => {
    const [counter, setCounter] = useState<number>(10)
    const navigate = useNavigate()
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => {
                if (prevCounter === 1) {
                    clearInterval(interval)
                    navigate(ROUTES.base)
                }
                return prevCounter - 1
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [navigate])
    return (
        <Container>
            <div className="text-center">
                <h3 className="text-4xl text-green-600 font-bold mb-6">Ваш заказ принят</h3>
                <p className="text-xl font-bold mb-6">Вы будете перенаправлены на главную страницу через <span className="text-amber-700">{counter} секунд</span></p>
                <p className="text-xl font-bold">Перейти в <Link to={ROUTES.profile} className="text-amber-600 hover:underline underline-offset-4 hover:text-amber-600">личный кабинет</Link></p>
            </div>
        </Container>
    )
}
export default Success