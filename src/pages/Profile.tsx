import { Container } from "../components/UI/Container/Container"
import { useAppSelector } from "../hooks/redux"
import { USER_ROLE } from '../lib/constants'
import { Admin } from "../components/Profile/Admin/Admin"
import { Client } from "../components/Profile/Client/Client"
import ClientImg from '../assets/client.jpg'
import AdminImg from '../assets/admin.jpg'
import { useActions } from "../hooks/action"

const Profile = () => {
    const { user, orders } = useAppSelector(state => ({
        user: state.carts.user,
        orders: state.orders.order
    }))
    const { clearOrder, clearCart } = useActions()
    const isAdmin = user.role === USER_ROLE.Admin
    const isClient = user.role === USER_ROLE.Client
    return (
        <Container>
            {isAdmin && <Admin {...user} img={AdminImg} orders={orders} clearOrder={clearOrder} clearCart={clearCart} />}
            {isClient && <Client {...user} img={ClientImg} orders={orders} clearOrder={clearOrder} />}
        </Container>
    )
}
export default Profile