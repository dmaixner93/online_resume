const Button = props => {
  return (
    <button
      data-glow
      onClick={e => e.preventDefault()}
      className="px-4 py-2 text-sm border rounded-full text-gray-50 bg-blue-500 shadow-sm dark:text-gray-900 dark:bg-blue-300 dark:border-blue-300 border-blue-500 focus:outline-none">
      View Resume
    </button>
  )
}

export default Button;