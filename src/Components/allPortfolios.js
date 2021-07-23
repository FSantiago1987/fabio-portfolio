import PortfolioHtml from '../Assets/Images/portImages/portfolio-html.jpg';
import DogYou from '../Assets/Images/portImages/dogyou-html.jpg';
import DrumKit from '../Assets/Images/portImages/drum-javascript.jpg';
import SimonGame from '../Assets/Images/portImages/simon-game.jpg';
import DriveBuddy from '../Assets/Images/portImages/drive-buddy.jpg';
import IncidentManager from '../Assets/Images/portImages/incident.jpg';
import LinkedIn from '../Assets/Images/portImages/linkedin.jpg';
import BetaFolks from '../Assets/Images/portImages/beta-folks.jpg';
import GitHubIcon from '../Assets/Images/portImages/github.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInternetExplorer,
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";

const portfolios = [
    {
        id: 1,
        category: 'HTML',
        link1: 'https://github.com/FSantiago1987/CSS---My-Personal-Site',
        link2: 'https://fsantiago1987.github.io/CSS---My-Personal-Site/',
        icon1: faGithub,
        icon2: faInternetExplorer,
        image: PortfolioHtml,
        title: 'Portfolio - HTML & CSS'
    },
    {
        id: 2,
        category: 'HTML',
        link1: 'https://github.com/FSantiago1987/Dog-You-',
        link2: 'https://fsantiago1987.github.io/Dog-You-/',
        icon1: faGithub,
        icon2: faInternetExplorer,
        image: DogYou,
        title: 'Dog You - HTML, BootStrap & CSS'
    },
    {
        id: 3,
        category: 'JavaScript',
        link1: 'https://github.com/FSantiago1987/DrumKit',
        link2: 'https://fsantiago1987.github.io/DrumKit/',
        icon1: faGithub,
        icon2: faInternetExplorer,
        image: DrumKit,
        title: 'Drum Kit - JavaScript'
    },
    {
        id: 4,
        category: 'jQuery',
        link1: 'https://github.com/FSantiago1987/SimonGame',
        link2: 'https://fsantiago1987.github.io/SimonGame/',
        icon1: faGithub,
        icon2: faInternetExplorer,
        image: SimonGame,
        title: 'Simon Game - jQuery'
    },
    {
        id: 5,
        category: 'React JS',
        link1: 'https://github.com/DriveBuddy-Comp231/drive-buddy-project',
        link2: 'https://drive-buddy.herokuapp.com/',
        icon1: faGithub,
        icon2: faInternetExplorer,
        image: DriveBuddy,
        title: 'DriveBuddy - NodeJS & ReactJS'
    },
    {
        id: 6,
        category: 'Node JS',
        link1: 'https://github.com/FSantiago1987/Comp229-Incident-Management',
        link2: 'https://compp229-incident-management.herokuapp.com/',
        icon1: faGithub,
        icon2: faInternetExplorer,
        image: IncidentManager,
        title: 'Incident Manager - NodeJS & Angular'
    },
    {
        id: 7,
        category: 'React JS',
        link1: 'https://github.com/FSantiago1987/linkedin-clone',
        link2: 'https://linkedin-clone-128aa.web.app/',
        icon1: faGithub,
        icon2: faInternetExplorer,
        image: LinkedIn,
        title: 'LinkedIn Clone - ReactJS & Redux'
    },
    {
        id: 8,
        category: 'React JS',
        link1: 'https://github.com/FSantiago1987/BetaFolksProject',
        link2: 'https://fsantiago1987.github.io/BetaFolksProject/',
        icon1: faGithub,
        icon2: faInternetExplorer,
        image: BetaFolks,
        title: 'Beta Folks - React JS, Styled Components & Tailwind'
    }
]

export default portfolios;