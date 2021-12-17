import { Link } from 'react-router-dom';
import CartBlock from '../cartBlock/CartBlock';
import style from './Header.module.css'

function Header(){
    return(
        <div className={ style.header }>
            <div className={ style.header__title}>
                <Link to='/' className={ style.header__link}>
                    Game Store
                </Link>
            </div>
            <div className={ style.header__cartButton}>
                <CartBlock />
            </div>
        </div>
    )
}
export default Header;