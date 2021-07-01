import Project from './Project';
import projects from '../static/projects';
import { v4 as uuidv4 } from 'uuid';
import Spacer from '../utils/Spacer';
import { Link } from 'react-router-dom';

const Projects = () => {
  const allProjects = projects.map(project => {
    const { id, title, name, description } = project;
    const orientation = (project.id % 2) === 0 ? 'left' : 'right';
    return (
      <div key={uuidv4()} className="project-wrapper">
        <Link to="/waylit">
          <Project
            id={id}
            orientation={orientation}
            title={title}
            name={name}
            description={description}
          />
        </Link>
        <Spacer height={16} />
      </div>
  )})
  return (
    allProjects
  )
}

export default Projects;
