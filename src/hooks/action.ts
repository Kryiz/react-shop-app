import { orderActions } from './../store/order/order.slice';
import { cartActions } from '../store/user/user.slice';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { productActions } from '../store/product/product.slice'

const actions = {
    ...productActions,
    ...cartActions,
    ...orderActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}