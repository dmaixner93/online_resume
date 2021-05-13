const NavBarTab = ({ icon, label, active, index, toggle }) => {
  return (
    <div onClick={() => toggle(index)} className={`flex text-sm font-semibold cursor-pointer rounded-md py-2 px-3 items-center justify-center ${active ? 'bg-indigo-500 dark:bg-gray-700' : 'bg-transparent'}`}>
      {icon}<span className="ml-2 capitalize text-white">{label}</span>
    </div>
  )
}

export default NavBarTab;