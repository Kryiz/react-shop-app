import { Suspense, lazy, useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useActions } from './hooks/action';
import { useAppSelector } from './hooks/redux';
import { useLazyGetProductsQuery } from './store/product/product.api';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute ';
import Helmet from "react-helmet";
import { USER_ROLE } from './lib/constants';
import { ROUTES } from './lib/routes';
import { Header } from './components/Layout/Header/Header';
import { Main } from './pages/Main';
import { Footer } from './components/Layout/Footer/Footer';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Success from './pages/Success';
import Todo from './pages/Todo';
import { SkeletonCard } from './components/Skeleton/SkeletonCard';
import { SkeletonCards } from './components/Skeleton/SkeletonCards';

const Pizza = lazy(() => import('./pages/Pizza'))
const Sushi = lazy(() => import('./pages/Sushi'))
const Product = lazy(() => import('./pages/Product'))

function App() {
  const [GetProducts, { error }] = useLazyGetProductsQuery();
  const { user } = useAppSelector(state => state.carts)
  const { setProductsToStore } = useActions()
  const isAdmin = !!user && user.role?.includes(USER_ROLE.Admin)
  const isClient = !!user && user.role?.includes(USER_ROLE.Client)

  const fetchProducts = useCallback(async () => {
    const response = await GetProducts();
    if (response.data) {
      setProductsToStore(response.data);
    }
  }, [GetProducts, setProductsToStore]);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet
        title="Тестовый интернет магазин на React"
        meta={[
          { "name": "description", "content": "Тестовый интернет магазин на React и Redux-Toolkit" }
        ]} />
      <Header />
      <main className='bg-gray-100 font-nunito select-none'>
        <Routes>
          <Route path={ROUTES.base} element={<Main />} />
          <Route path={ROUTES.pizzas} element={
            <Suspense fallback={<SkeletonCards />} >
              <Pizza
                title={'Пицца'}
                error={error} />
            </Suspense>
          } />
          <Route path={ROUTES.sushi} element={
            <Suspense fallback={<SkeletonCards />} >
              <Sushi
                title={'Суши'}
                error={error} />
            </Suspense>
          } />
          <Route path={ROUTES.product} element={
            <Suspense fallback={<SkeletonCard />} >
              <Product />
            </Suspense>
          } />
          <Route element={<ProtectedRoute isAllowed={isAdmin} />} >
            <Route path='todo' element={<Todo />} />
          </Route>
          <Route path={ROUTES.cart} element={<Cart />} />
          <Route path={ROUTES.success} element={<Success />} />
          <Route element={<ProtectedRoute isAllowed={isClient || isAdmin} />}>
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main >
      <Footer />
    </>
  )
}

export default App