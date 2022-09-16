import Typed from 'react-typed';
import { motion } from 'framer-motion';

import styles from '../styles/Header.module.scss'

const Header = ({data}) => {
    const circleVariant = {
        initial: ({ scale = 1 }) => ({ scale, opacity: 0 }),
        animate: ({ time, delay = 0 }) => ({ scale: 1, opacity: 1, transition: { duration: time, delay, type: "spring" } })
    }

    return (
        <header className={styles.header + " container section"} key={1}>
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
            <motion.span
                className={styles.header__text}
                initial={{opacity: 0, translateX: -300}}
                animate={{opacity: 1, translateX: 0}}
                transition={{duration: 0.5, delay: 1.5}}
            >
                <Typed
                    strings={[`<span>${data.title}</span> <br />  ${data.description}`]}
                    startDelay={2300}
                    typeSpeed={60}
                />
            </motion.span>
        </header>
    );
}

export default Header;
