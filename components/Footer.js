import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <p>
                Copyright &copy; All Rights Reserved {new Date().getFullYear()} Daniel Scott
            </p>
            <section className="social-icons">
                <a href="https://github.com/myDeveloperJourney" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/daniel-j-scott/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
            </section>
        </footer>
    );
}

export default Footer;