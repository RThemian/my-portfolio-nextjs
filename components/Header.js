import Image from 'next/image';
import styles from '@/styles/Header.module.css';

function Header() {
    return (
        <header className={`${styles.header} flex-ctr-centered`}>
            <div className="flex-ctr-centered">
                <Image src="/daniel-scott.png" height={200} width={200} alt="Daniel Scott" />
                <h1>Hi, I'm Daniel Scott</h1>
            </div>
        </header>
    );
}

export default Header;