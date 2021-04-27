import Project from './Project';
import projects from '../static/projects';
import { v4 as uuidv4 } from 'uuid';
import Spacer from '../utils/Spacer';

const Projects = () => {
  const allProjects = projects.map(project => {
    const { id, title, name, description } = project;
    const orientation = (project.id % 2) === 0 ? 'left' : 'right';
    return (
      <div key={uuidv4()} className="project-wrapper">
        <Project
          id={id}
          orientation={orientation}
          title={title} 
          name={name}
          description={description}
        />
        <Spacer height={20} />
      </div>
  )})
  return (
    allProjects
  )
}

export default Projects;