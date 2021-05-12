import { useToggle } from './hooks/useToggle';

const Dropdown = ({ visibility }) => {
  /** @TODO: Set delay variable base on visibility state to 
   * add show/hide text during scale transform 
   * */
  return (
    <div className="py-1 rounded-md bg-white ring-1 ring-gray-200">
      <div className="cursor-pointer px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
        Your Profile
      </div>
      <div className="cursor-pointer px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
        Upload files
      </div>
      <div className="cursor-pointer px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
        Company Details
      </div>
      <div className="cursor-pointer px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
        Settings
      </div>
      <div className="h-px w-full bg-gray-200 bg-opacity-75"></div>
      <div className="w-full cursor-pointer px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
        Sign out
      </div>
    </div>
  )
}

const ProfileDropdown = () => {
  const [ visibility, setVisibility ] = useToggle(false);
  return (
    <div className="ml-auto relative">
      <div>
        <button onClick={() => setVisibility()} className="flex items-center text-white text-sm border-2 border-transparent rounded-full px-3 focus:outline-none focus:border-gray-300 hover:bg-white hover:bg-opacity-10">
          <span className="leading-5 text-sm w-full p-2">
            Aubrey Graham
          </span>
          <svg className="transform duration-300 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 8l-5 5-5-5" />
          </svg>
        </button>
      </div>
      <div className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50 transition duration-75 ease-in ${visibility ? 'opacity-100' : 'opacity-0'}`}>
        <Dropdown />
      </div>
    </div>
  )
}

export default ProfileDropdown;