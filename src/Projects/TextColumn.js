const TextColumn = props => {
  const { description, title, align } = props;

  return (
    <div className={`absolute ${align.position} max-w-lg w-full h-full`}>
      <div className={`relative w-full h-full ${align.flex} flex flex-col ${align.text} justify-center text-gray-500 dark:text-gray-300`}>
        <span className="font-mono text-blue-500">Project</span>
        <h4 className="text-gray-800 dark:text-gray-100 font-semibold text-2xl">{title}</h4>
        <div className="mt-4 w-full py-6 px-4 h-32 bg-white dark:bg-gray-800 rounded shadow-lg">
          <p className="relative text-sm w-full h-full text-gray-600 dark:text-gray-300">{description}</p>
        </div>
        <div className="mt-4 font-mono">React&nbsp;Node.js</div>
        <div className="text-sm">Github</div>
      </div>
    </div>
  )
}

export default TextColumn;