import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Container } from '../UI/Container/Container'

export const SkeletonCard = () => {
    return (
        <Container>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 bg-white rounded-lg p-4">
                <div className='basis-1/2 2xl:basis-1/3'>
                    <Skeleton height={250} />
                </div>
                <div className='basis-1/2 2xl:basis-2/3'>
                    <Skeleton height={30} className='mb-2' />
                    <Skeleton count={5} className='mb-2' />
                    <Skeleton height={30} width={60} className='mb-1' />
                    <Skeleton height={46} width={230} className='mt-2' />
                </div>
            </div>
        </Container>
    )
}