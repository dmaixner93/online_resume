const NavBarTab = ({ icon, label, active, index, toggle }) => {
  return (
    <div onClick={() => toggle(index)} className={`flex text-sm font-medium cursor-pointer rounded-md py-2 px-3 items-center justify-center hover:bg-indigo-500 hover:bg-opacity-50 dark:hover:bg-gray-700 dark:hover:bg-opacity-50 ${active ? 'bg-indigo-500 dark:bg-gray-700' : 'bg-transparent'}`}>
      {icon}<span className="ml-2 capitalize text-white">{label}</span>
    </div>
  )
}

export default NavBarTab;