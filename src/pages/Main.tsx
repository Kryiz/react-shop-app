import { Container } from "../components/UI/Container/Container"
import { UnderlinedLink } from "../components/UI/Links/UnderlinedLink"
import Logo from '../assets/logo.png'

export const Main = () => {
    return (
        <Container>
            <div className="text-center">
                <div>
                    <img src={Logo} alt={'pizza'} className="w-3/4 md:w-48 object-cover rounded-lg mx-auto mb-12 hover:animate-spin" />
                    <h2 className="text-lg md:text-2xl font-bold mb-4 hover:animate-pulse">Тестовый интернет магазин со соедующим стеком технологий :</h2>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-lg md:text-2xl font-bold text-amber-600 mb-6">
                        <UnderlinedLink href={'https://react.dev/'} target='_blank'>React</UnderlinedLink> /
                        <UnderlinedLink href={'https://redux-toolkit.js.org/'} target='_blank'>Redux-Toolkit</UnderlinedLink> /
                        <UnderlinedLink href={'https://reactrouter.com/en/main/start/tutorial'} target='_blank'>React Router</UnderlinedLink> /
                        <UnderlinedLink href={'https://redux-toolkit.js.org/rtk-query/overview'} target='_blank'>RTK Query</UnderlinedLink> /
                        <UnderlinedLink href={'https://react-hook-form.com/'}>React-Hook-Form</UnderlinedLink> /
                        <UnderlinedLink href={'https://vitejs.dev/'} target='_blank'>Vite</UnderlinedLink> /
                        <UnderlinedLink href={'https://pnpm.io/'} target='_blank'>pnpm</UnderlinedLink> /
                        <UnderlinedLink href={'https://www.typescriptlang.org/'} target='_blank'>TypeScript</UnderlinedLink>

                    </div>
                </div>
                <div>
                    <h2 className="text-lg md:text-2xl font-bold mb-4 hover:animate-pulse">Стили, иконки и дополнительно :</h2>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-lg md:text-2xl font-bold text-amber-600 mb-6">
                        <UnderlinedLink href={'https://tailwindcss.com/'} target='_blank'>Tailwind Css</UnderlinedLink> /
                        <UnderlinedLink href={'https://heroicons.com/'} target='_blank'>Heroicons</UnderlinedLink> /
                        <UnderlinedLink href={'https://icon-sets.iconify.design/'} target='_blank'>Iconify</UnderlinedLink> /
                        <UnderlinedLink href={'https://github.com/dvtng/react-loading-skeleton'} target='_blank'>React Loading Skeleton</UnderlinedLink> /
                        <UnderlinedLink href={'https://github.com/nfl/react-helmet'} target='_blank'>React Helmet</UnderlinedLink>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg md:text-2xl font-bold mb-4 hover:animate-pulse">Автор © Антон Пыжов :</h2>
                    <div className="flex justify-center gap-2 md:gap-4 text-lg md:text-2xl font-bold text-amber-600 mb-6">
                        <UnderlinedLink href={'https://github.com/Kryiz'} target='_blank'>GitHub</UnderlinedLink>
                    </div>
                </div>
            </div>
        </Container >
    )
}