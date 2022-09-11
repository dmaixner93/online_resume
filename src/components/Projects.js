import Project from './Projects/Project';
import projects from '../static/projects';
import { v4 as uuidv4 } from 'uuid';
import Spacer from '../ components/Spacer';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projectsData = projects.map(project => {
    const { id, title, image, description } = project;
    const orientation = (project.id % 2) === 0 ? 'left' : 'right';
    return (
      <div key={uuidv4()} className="project-wrapper">
        <Link to="/waylit">
          <Project
            id={id}
            orientation={orientation}
            title={title}
            image={image}
            description={description}
          />
        </Link>
        <Spacer height={16} />
      </div>
  )})
  return (
    projectsData
  )
}

export default Projects;
