const TextColumn = props => {
  const { description, name } = props;
  return (
    <div className="absolute right-0 max-w-lg w-full h-full">
      <div className="relative w-full h-full flex flex-col items-end justify-center text-gray-500 dark:text-gray-300">
        <span className="font-mono text-blue-400">Project</span>
        <h4 className="text-gray-800 dark:text-gray-100 font-semibold text-2xl">{name}</h4>
        <div className="mt-6 text-right w-full py-6 px-4 h-32 bg-gray-100 dark:bg-gray-800 rounded shadow-md">
          <p className="relative text-sm w-full h-full text-gray-600 dark:text-gray-300">{description}</p>
        </div>
        <div className="mt-2 font-mono">React&nbsp;Node.js</div>
        <div className="text-sm">Github</div>
      </div>
    </div>
  )
}

export default TextColumn;