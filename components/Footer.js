import SocialIcons from './SocialIcons';

function Footer() {
    return (
        <footer className="footer">
            <p>
                Copyright &copy; All Rights Reserved {new Date().getFullYear()} Daniel Scott
            </p>
            <SocialIcons />
        </footer>
    );
}

export default Footer;