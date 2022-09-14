import Image from 'next/image';

import styles from '../styles/Projects.module.scss'

const Projects = () => {
    return (
        <div className={styles.projects + " container"}>
            <div className={styles.projects__card}>
                <span className={styles.projects__card__img}>
                    <Image
                    width='100%'
                    height='100%'
                    objectFit='cover'
                        layout='fill'
                
                        src='https://images.unsplash.com/photo-1663050005090-86b77b8c01e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                        alt='project image'
                    />
                </span>
                <span className={styles.projects__card__img}>
                    <h2>Nombre del Proyecto</h2>
                    <p>Breve descripcion del proyecto, amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </span>
            </div>
        </div>
    );
}

export default Projects;
