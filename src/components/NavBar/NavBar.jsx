
import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import styles from "/src/components/NavBar/navbar.module.css"
export const NavBar = () => {
    return (
        <nav className={styles.navbar1}>
            <Link to="/">
                <p className={styles.logotipo}>Tienda Online</p>
            </Link>

            <ul>
                <li>
                    <Link to="/">
                        <button>Inicio</button>
                    </Link>
                    
                </li>
                <li>
                    <Link to="/category/zapatillas">
                        <button>Zapatillas</button>
                    </Link>
                    
                </li>
                <li>
                    <Link to="/category/accesorios">
                        <button>Accesorios</button>
                    </Link>
                    
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}
