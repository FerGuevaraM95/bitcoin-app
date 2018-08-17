import Link from 'next/link';

const Navigation = () => (
    <nav className="navbar navbar-expand navbar-dark bg-warning">
        <div className="container">
            <Link href="/"><a className="navbar-brand">TodoBitcoin</a></Link>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Inicio</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link">Nosotros</a></Link>
                    </li>
                </div>
            </div>
        </div>
    </nav>
)

export default Navigation;