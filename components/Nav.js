import Link from 'next/link';
import styles from  '@/styles/Nav.module.css';
import { usePathname } from 'next/navigation';

function Nav() {
    const path = usePathname();
    return (
        <nav className={styles.nav}>
            { path === '/' ?
                <Link href="/resume">Resume</Link>
                :
                <Link href="/">Home</Link>
            }
        </nav>
    );
}

export default Nav;