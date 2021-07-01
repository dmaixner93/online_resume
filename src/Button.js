import React, { useState } from 'react';

const Button = props => {
  const { text } = props
  const [ updatedText, setUpdatedText ] = useState(false);
  return (
    <button
      data-glow
      onClick={() => setUpdatedText(true)}
      className="px-4 py-2 text-sm border rounded-full text-gray-50 bg-blue-500 shadow-sm dark:text-gray-900 dark:bg-blue-300 dark:border-blue-300 border-blue-500 hover:opacity-80 focus:outline-none">
        { updatedText ? 'Coming soon...' : text }
    </button>
  )
}

export default Button;