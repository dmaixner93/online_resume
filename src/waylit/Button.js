const Button = (props) => {
  const { text, icon } = props;
  return (
    <div className="h-full flex items-center flex-col rounded-md">
      <span className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-md text-white dark:text-gray-800 bg-indigo-500 dark:bg-indigo-300 cursor-pointer hover:bg-indigo-600 focus:input-focus">
        <span>{icon}</span>
        &nbsp;
        {text}
      </span>
    </div>
  )
}

export default Button;