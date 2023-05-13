import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialIcons(props) {
    return (
        <section className="social-icons">
            <a href="https://github.com/myDeveloperJourney" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} className='icon' size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/daniel-j-scott/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className='icon' size="2x" />
            </a>
        </section>
    );
}

export default SocialIcons;