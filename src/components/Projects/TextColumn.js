import { Link } from 'react-router-dom';

const TextColumn = ({ description, title, align, projectLink, }) => {
  return (
    <div draggable="false" className={`absolute ${align.position} max-w-lg w-full h-full p-4 lg:p-0`}>
      <div className={`relative w-full h-full ${align.flex} flex flex-col ${align.text} justify-center text-gray-500 dark:text-gray-300`}>
        <span className="font-mono text-gray-500 dark:text-gray-300">Project</span>
        <h4 className="font-semibold text-2xl">{title}</h4>
        <div className="relative z-10 my-4 flex items-center justify-center w-full py-6 px-4 h-32 bg-white dark:bg-gray-800 rounded shadow-lg">
          <p className="relative text-sm w-full h-auto text-gray-600 cursor-text dark:text-gray-300">{description}</p>
        </div>
        {/* <div className="mt-4 font-mono">{techStack}</div> */}
        <div className="relative z-10 text-sm">
          <Link
            to={projectLink}
            className="cursor-pointer text-blue-500 font-medium dark:text-blue-300"
          >
            Check it out
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TextColumn;