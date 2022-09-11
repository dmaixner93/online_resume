import Project from './Project';
import projects from '../../static/projects';
import { v4 as uuidv4 } from 'uuid';
import Spacer from '../../components/Spacer';

const Projects = () => {
  const allProjects = projects.map((project, idx) => {
    const { id, title, image, description } = project;
    const orientation = (idx % 2) === 0 ? 'left' : 'right';
    return (
      <div key={uuidv4()} className="project-wrapper">
        <Project
          id={id}
          orientation={orientation}
          title={title}
          image={image}
          description={description}
        />
        <Spacer height={16} />
      </div>
  )})
  return (
    allProjects
  )
}

export default Projects;
