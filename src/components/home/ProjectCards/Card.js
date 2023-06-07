import React from "react";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';

export default function ProjectCard({ id, title, image, description, projectLink }) {
  const imageUrl = `./images/${image}`;
  return (
    <div className="w-72 h-auto rounded-md border border-gray-200 dark:border-gray-700">
      {/* Image */}
      <img src={imageUrl} />
      {/* Card Content/Text */}
      <div className="p-4 w-full h-auto">
      </div>
    </div>
  )
}