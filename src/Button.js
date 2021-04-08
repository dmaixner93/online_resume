// import { useContext } from 'react';
// import { ThemeContext } from './contexts/theme.context';

const Button = props => {
  return (
    <button
      data-glow
      onClick={e => e.preventDefault()}
      className="px-4 py-2 text-sm text-gray-900 bg-blue-300 border border-blue-300 rounded-full hover:opacity-80 focus:outline-none">
      View Resume
    </button>
  )
}

export default Button;