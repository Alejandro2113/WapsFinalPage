//CARRO DE COMPRAS
import cart from '../../assets/purple-shopping-cart.svg'
import { useCart } from '../../hooks/useCart'

import './CartWidget.css'

function CartWidget() {
  const { TotalQuantity } = useCart()

  return (
    <div className='cartCount'>
      <a className="nav-link" href="#">
        {TotalQuantity}
        <img src={cart} alt="Compras" className='logoCart' />
      </a>
    </div>
  )
}

export default CartWidget
