import React from 'react';

import styles from '../styles/ProjectInfo.module.scss'

const ProjectInfo = ({project}) => {
    return (
        <>
            <h2 className={styles.title}>{project?.fields?.project_name}</h2>
            <p className={styles.desc}>{project?.fields?.project_desc}</p>
            <span className={styles.links}>
                {project?.fields?.project_links?.Demo && <a href={project.fields.project_links.Demo} target='_blank' rel="noreferrer"> Demo </a>}
                {project?.fields?.project_links?.Frontend && <a href={project.fields.project_links.Frontend} target='_blank' rel="noreferrer"> Frontend (GitHub) </a>}
                {project?.fields?.project_links?.Backend && <a href={project.fields.project_links.Backend} target='_blank' rel="noreferrer"> Backend (GitHub) </a>}
            </span>
        </>
    );
}

export default ProjectInfo;