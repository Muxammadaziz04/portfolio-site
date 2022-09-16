import { useEffect, useRef, useState } from 'react';

import ProjectCard from './ProjectCard';

import styles from '../styles/Projects.module.scss'
import ProjectInfo from './ProjectInfo';

const Projects = ({ data }) => {
    const sliderRef = useRef()
    const [slide, setSlide] = useState(1)
    
    return (
        <div className={styles.projects + " container"}>
            <span className={styles.projects__slider} ref={sliderRef}>
                {
                    data && data.map((project, index) => <ProjectCard project={project} index={index} slide={slide} key={index} />)
                }
            </span>
            <span className={styles.projects__slider__btns}>
                <button onClick={() => setSlide(state => state > 1 ? state - 1 : data.length)}>Prev</button>
                <button onClick={() => setSlide(state => state < data.length ? state + 1 : 1)}>Next</button>
            </span>
            <span className={styles.projects__info}>
                {
                    data && data[slide - 1] && (
                        <ProjectInfo project={data[slide - 1]} />
                    )
                }
            </span>
        </div>
    );
}

export default Projects;
