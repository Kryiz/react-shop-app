import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Container } from '../UI/Container/Container'

export const SkeletonCards = () => {
    return (
        <Container>
            <div className='flex flex-wrap items-center justify-between gap-4 mb-2 sm:mb-6'>
                <div>
                    <Skeleton height={48} width={150} />
                </div>
            <div className='flex items-center gap-2 sm:gap-4 ml-auto'>
                    <Skeleton height={36} width={113} />
                    <Skeleton height={36} width={127} />
                </div>
            </div>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="relative rounded-lg bg-white p-4">
                        <div className="h-full flex flex-col">
                            <Skeleton height={190} className='mb-5' />
                            <Skeleton className='pt-3 mb-4' />
                            <Skeleton count={2} />
                            <div className="flex items-center justify-between pt-4">
                                <Skeleton height={24} width={60} />
                                <Skeleton height={40} width={50} />
                            </div>
                        </div>
                    </div>))}
            </div>
        </Container>
    )
}