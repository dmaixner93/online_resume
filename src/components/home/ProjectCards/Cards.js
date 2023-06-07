import React from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import projects from '../../../static/projects';

export default function ProjectCards() {
  const projectCards = projects.map((project) => {
    const { id, title, image, description, projectLink } = project;
    return (
        <Card
          key={uuidv4()}
          id={id}
          title={title}
          image={image}
          description={description}
          projectLink={projectLink}
        />
    )
  })

  return (
    projectCards
  )
}