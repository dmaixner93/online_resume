const Button = props => {
  return (
    <button
      data-glow
      onClick={e => e.preventDefault()}
      className="px-4 py-2 text-sm border rounded-full text-gray-50 bg-blue-500 shadow-sm dark:text-gray-900 border-blue-500 hover:opacity-80 focus:outline-none">
      View Resume
    </button>
  )
}

export default Button;