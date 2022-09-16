import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import styles from '../styles/ProjectCard.module.scss'

const ProjectCard = ({project, index, slide}) => {
    const cardRef = useRef()
    
    useEffect(() => {
        // if(index + 1 === slide){
        //     cardRef.current?.scrollIntoView({
        //         behavior: 'auto',
        //         block: 'center',
        //         inline: 'center'
        //     })
        // }
    }, [slide])

    return (
            <div className={styles.card} ref={cardRef}>
                <motion.div 
                    className={styles.card__img + " " + `${index + 1 === slide ? '' : `${ index + 1 > slide ? styles.right : styles.left}`}`}
                >
                    <Image  
                        layout='fill'
                        objectFit='cover'
                        src={'https:' + project.fields.project_image.fields.file.url}
                        alt='project image'
                    />
                </motion.div>
            </div>
    );
}

export default ProjectCard;
