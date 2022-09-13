import Image from 'next/image';

import Linkedin from '../Assets/Icons/in.svg'
import GitHub from '../Assets/Icons/git.svg'
import Telegram from '../Assets/Icons/telegram.svg'

import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
    return (
        <navbar className={styles.navbar + " container"}>
            <span className={styles.navbar__links}>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
            </span>
            <span className={styles.navbar__links} style={{"columnGap": "30px"}}>
                <a href="https://www.linkedin.com/in/muhammadaziz-ramziddinov-175583234" target='_blank' rel="noreferrer">
                    <Image src={Linkedin} alt="social media icon" width={32} height={32} />
                </a>
                <a href="https://github.com/Muxammadaziz04" target='_blank' rel="noreferrer">
                    <Image src={GitHub} alt="social media icon" width={32} height={32} />
                </a>
                <a href="https://t.me/front_nd" target='_blank' rel="noreferrer">
                    <Image src={Telegram} alt="social media icon" width={32} height={32} />
                </a>
            </span>
        </navbar>
    );
}

export default Navbar;
