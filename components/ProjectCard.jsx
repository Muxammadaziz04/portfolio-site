import Image from 'next/image';
import { useEffect, useRef } from 'react';

import styles from '../styles/ProjectCard.module.scss'

const ProjectCard = ({project, index, slide, inView}) => {
    const cardRef = useRef()
    
    useEffect(() => {
        if(index + 1 === slide && inView){
            cardRef.current?.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            })
        }
    }, [slide])

    return (
            <div className={styles.card} ref={cardRef}>
                <div 
                    className={styles.card__img + " " + `${index + 1 === slide ? '' : `${ index + 1 > slide ? styles.right : styles.left}`}`}
                >
                    <Image  
                        width='100%'
                        height='100%'
                        layout='fill'
                        objectFit='cover'
                        src={'https:' + project.fields.project_image.fields.file.url}
                        alt='project image'
                    />
                </div>
            </div>
    );
}

export default ProjectCard;
