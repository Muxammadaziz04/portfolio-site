import Image from 'next/image';
import { motion } from 'framer-motion';

import carbon from '../Assets/Img/carbon.svg'

import styles from '../styles/About.module.scss'

const About = () => {
    const imgVariants = {
        offscreen: { opacity: 0, scale: 6 },
        onscreen: { opacity: 1, scale: 1}
    }
    return (
        <section className={styles.about + ' container section'} key={2}>
            <span className={styles.about__text}>
                <h1>About me</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur perspiciatis sit placeat, deleniti, laboriosam voluptatum, ad eveniet magnam voluptates nihil cupiditate facilis. Quasi voluptas corrupti ratione ad doloremque suscipit culpa.</p>
            </span>
            <motion.span
                className={styles.about__img}
                initial='offscreen'
                whileInView='onscreen'
                
            >
                <motion.span variants={imgVariants}>
                    <Image
                        objectFit='cover'
                        src={carbon}
                        alt="info about me"
                    />
                </motion.span>
            </motion.span>
        </section>
    );
}

export default About;
