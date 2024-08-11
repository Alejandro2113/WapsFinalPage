import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navStyle fixed-top">

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">WAPSONLINE</a>

                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/category/apple">APPLE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/category/samsung">SAMSUNG</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/category/consoles">CONSOLAS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/category/accesories">ACCESORIOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/contactos">CONTACTOS</Link>
                        </li>
                    </ul>
                    <form>

                        <CartWidget ></CartWidget>

                    </form>
                </div>
            </nav>

        </nav >
    )
}

export default NavBar
