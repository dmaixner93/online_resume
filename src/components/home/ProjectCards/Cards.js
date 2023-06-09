import React from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import projects from '../../../static/projects';

export default function ProjectCards() {
  return (
    <div className="flex w-full items-center md:items-start flex-col md:flex-row">
      {
        projects.map((project) => {
          const { id, title, image, imageAlt, dates, description, projectLink } = project;
          return (
            <Card
              key={uuidv4()}
              id={id}
              title={title}
              image={image}
              imageAlt={imageAlt}
              description={description}
              dates={dates}
              projectLink={projectLink}
            />
          )
        })
      }  
    </div>
  )
}