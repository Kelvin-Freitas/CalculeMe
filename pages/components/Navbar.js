import Link from "next/link"

import styles from "../../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.minhaNavBar}`}>
            <div className="container-fluid">
                <div>
                    <a className={`navbar-brand ${styles.navBarTitle}`} href="#">CalculeMe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span clclassNameass="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link href="/"><a className="nav-link active" aria-current="page" href="#">Todas</a></Link>
                        <Link href="/matematicas"><a className="nav-link" href="#">Matemáticas</a></Link>
                        <Link href="/financeiro"><a className="nav-link" href="#">Financeiro</a></Link>
                        <Link href="/fiscais"><a className="nav-link" href="#">Fiscais</a></Link>
                        <Link href="/conversores"><a className="nav-link" href="#">Conversores</a></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}