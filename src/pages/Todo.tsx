import { Container } from "../components/UI/Container/Container"

const Todo = () => {
    const baseStyle = 'mb-3 hover:underline underline-offset-4 cursor-default'
    const doneStyle = `${baseStyle} line-through decoration-amber-600`
    return (
        <Container>
            <div className="flex flex-col items-center mx-auto overflow-x-hidden">
                <h2 className="text-2xl font-bold mb-6 hover:animate-pulse">Что осталось сделать по сайту :</h2>
                <ol className="text-xl list-disc list-inside">
                    <li className={doneStyle}>Адаптация</li>
                    <li className={baseStyle}>Тестирование с Jest и React Testing Library</li>
                    <li className={baseStyle}>Редактирование персональных данных ?</li>
                </ol>
            </div>
        </Container>
    )
}
export default Todo