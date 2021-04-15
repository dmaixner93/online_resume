// import { useContext } from 'react';
// import { ThemeContext } from './contexts/theme.context';

const Button = props => {
  return (
    <button
      data-glow
      onClick={e => e.preventDefault()}
      className="px-4 py-2 text-sm border rounded-full text-gray-50 bg-gray-800 dark:glow-blue dark:text-gray-900 dark:bg-blue-400 border-gray-800 dark:border-blue-400 hover:opacity-80 focus:outline-none">
      View Resume
    </button>
  )
}

export default Button;