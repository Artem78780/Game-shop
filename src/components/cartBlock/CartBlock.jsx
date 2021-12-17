import { BiCart } from 'react-icons/bi' 
import style from './CartBlock.module.css'

function CartBlock() {
    return(
        <div className={ style.cartBlock }>
            <BiCart className={ style.cartBlock__icon }/>
            <span className={ style.cartBlock__price}>1000 грн</span>
        </div>
    )
}
export default CartBlock;