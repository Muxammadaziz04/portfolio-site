import Image from 'next/image';
import { motion } from 'framer-motion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from '../styles/About.module.scss'

const About = ({data}) => {
    const imgVariants = {
        offscreen: { opacity: 0, scale: 6 },
        onscreen: { opacity: 1, scale: 1}
    }

    return (
        <section className={styles.about + ' container section'} key={2}>
            <span className={styles.about__text}>
                <h1>About me</h1>
                <p>{documentToReactComponents(data.description)}</p>
            </span>
            <span
                className={styles.about__img}
                initial='offscreen'
                whileInView='onscreen'
            >
                    <Image
                        height='100%'
                        width='100%'
                        layout='fill'
                        objectFit='cover'
                        src={'https://' + data?.image?.fields?.file?.url}
                        alt="info about me"
                    />
            </span>
        </section>
    );
}

export default About;
