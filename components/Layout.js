import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

function Layout(props) {
    return (
        <div className={inter.className}>
            <Nav />
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;