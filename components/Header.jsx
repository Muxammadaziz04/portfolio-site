import { motion } from 'framer-motion';
import Typed from 'react-typed';

import styles from '../styles/Header.module.scss'

const Header = () => {
    const circleVariant = {
        initial: ({ scale = 1 }) => ({ scale, opacity: 0 }),
        animate: ({ time, delay = 0 }) => ({ scale: 1, opacity: 1, transition: { duration: time, delay } })
    }

    const func = () => {
        const audio = new Audio('text_audio.mp3');
        audio.volume = 1
        audio.play()
    }

    return (
        <header className={styles.header + " container"}>
            <motion.div
                className={styles.header__circle}
                initial='initial'
                animate='animate'
                custom={{ time: 1.1, delay: 0, scale: 5 }}
                variants={circleVariant}
            >
                {
                    Array(4).fill(null).map((_, index) => (
                        <motion.span
                            key={index}
                            className={styles.header__circle__child}
                            initial='initial'
                            animate='animate'
                            custom={{ time: 0.9, delay: (1.3 + index * 0.3), scale: 100 }}
                            variants={circleVariant}
                        ></motion.span>
                    ))
                }

                <div className={styles.header__circle__line}>
                    <div className={styles.header__circle__line__rotate}></div>
                    <motion.div
                        className={styles.header__circle__body}
                        initial='initial'
                        animate='animate'
                        custom={{ time: 0.9, delay: 0.7, scale: 5 }}
                        variants={circleVariant}
                    ></motion.div>
                </div>
            </motion.div>
            <span className={styles.header__text} onClick={func}>
            <Typed
                    strings={['Hello ! <br /> I\'m FullStack developer from tashkent']}
                    onStringTyped={() => {
                        const audio = new Audio('text_audio.mp3');
                        audio.volume = 1
                        audio.play()
                    }}
                    startDelay={1000}
                    typeSpeed={40}
                />
            </span>
        </header>
    );
}

export default Header;
