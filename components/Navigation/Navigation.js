import Link from 'next/link';

const Navigation = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Inicio</a></Link></li>
            <li><Link href="/about"><a>Nosotros</a></Link></li>
        </ul>
    </div>
)

export default Navigation;