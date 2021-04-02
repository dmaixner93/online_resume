const Button = () => {
  return (
    <button
      data-glow
      onClick={e => e.preventDefault()}
      className="px-4 py-2 text-sm text-gray-900 bg-blue-300 border border-blue-300 rounded-full">
      View Resume
    </button>
  )
}

export default Button;