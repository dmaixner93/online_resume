import Project from './Project';
import ImageColumn from './ImageColumn';
import TextColumn from './TextColumn';
import projects from '../assets/projects';
import { v4 as uuidv4 } from 'uuid';
// import LightsOutImg from '../static/media/lights_out.png';

const Projects = () => {
  const allProjects = projects.map(project => {
    return (
    <Project
      key={uuidv4()}
      image={<ImageColumn name={'lights_out'} />}
      text={<TextColumn
          name={project.name}
          description={project.description}
        />}
    />    
  )})
  return (
    <div>
      {allProjects}
    </div>
  )
}

export default Projects;