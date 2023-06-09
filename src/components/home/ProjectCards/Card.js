import React from "react";
import Spacer from '../../Spacer';
import { Link } from 'react-router-dom'

export default function ProjectCard({ id, title, image, imageAlt, description, dates, projectLink }) {
  const imageUrl = `./images/${image}`;
  return (
    <div className="w-80 overflow-hidden h-auto rounded-lg bg-gray-100 dark:bg-gray-800 mb-6 mr-0 lg:mb-0 lg:mr-6">
      {/* Image */}
      <img
        className="card-image"
        src={imageUrl}
        alt={imageAlt}
      />
      {/* Card Content/Text */}
      <div className="p-6">
        <div className="card-content w-full h-auto">
          <h4 className="font-medium text-lg">{ title }</h4>
          <Spacer height={2} />
          <div className="text-gray-600 dark:text-gray-400">{ dates }</div>
          {/* <p className="text-sm dark:text-gray-400">{description}</p> */}
        </div>
        <Spacer height={4} />
        <div className="card-actions flex justify-end">
          <Link
            to={ projectLink }
            className="px-4 py-2 font-medium text-sm border rounded-full text-gray-50 dark:bg-opacity-80 bg-blue-500 shadow-sm dark:text-gray-900 dark:bg-blue-300 dark:border-blue-300 border-blue-500 focus:outline-none">
            View Work
          </Link>
        </div>
      </div>
    </div>
  )
}