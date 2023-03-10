import React from 'react'
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList.js';

import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <h1> My Personal Projects</h1>
      <div className='projectList'></div>
        {ProjectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image}/>
        })}
    </div>
  );
}

export default Projects
