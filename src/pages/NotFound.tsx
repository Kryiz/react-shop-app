import { Container } from "../components/UI/Container/Container"
import { UnderlinedLink } from "../components/UI/Links/UnderlinedLink"

const NotFound = () => {
    return (
        <Container>
            <div className="font-bold text-4xl text-center font-mont mb-6">{'404'}</div>
            <div className="font-bold text-4xl text-center mb-6">{'Страница не найдена.'}</div>
            <div className="text-2xl font-bold text-amber-600 text-center">
                <UnderlinedLink href={'/'} >{'Вернуться на главную'}</UnderlinedLink>
            </div>/
        </Container>
    )
}
export default NotFound