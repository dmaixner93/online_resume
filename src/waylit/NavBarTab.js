const NavBarTab = ({ icon, label, active, index, toggle}) => {
  return (
    <div onClick={() => toggle(index)} className={`flex text-sm font-semibold cursor-pointer rounded-md py-2 px-3 items-center justify-center text-white ${active ? 'bg-indigo-500' : 'bg-transparent'}`}>
      {icon}<span className="ml-2 capitalize">{label}</span>
    </div>
  )
}

export default NavBarTab;