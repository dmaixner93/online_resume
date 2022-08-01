import LinkIcon from '@material-ui/icons/Link';

const TextColumn = ({ description, title, align, techStack, }) => {
  return (
    <div className={`absolute ${align.position} max-w-lg w-full h-full`}>
      <div className={`relative w-full h-full ${align.flex} flex flex-col ${align.text} justify-center text-gray-500 dark:text-gray-300`}>
        <span className="font-mono text-blue-500 dark:text-blue-300">Project</span>
        <h4 className="font-semibold text-2xl">{title}</h4>
        <div className="relative z-10 mt-4 flex items-center justify-center w-full py-6 px-4 h-32 bg-white dark:bg-gray-800 rounded shadow-lg">
          <p className="relative text-sm w-full h-auto text-gray-600 cursor-text dark:text-gray-300">{description}</p>
        </div>
        <div className="mt-4 font-mono">{techStack}</div>
        <div className="relative z-10 text-sm">
          <LinkIcon className="text-gray-600" />
        </div>
      </div>
    </div>
  )
}

export default TextColumn;