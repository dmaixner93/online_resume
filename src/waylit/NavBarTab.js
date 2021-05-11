const NavBarTab = ({ icon, label, active, index, toggle}) => {
  return (
    <div onClick={() => toggle(index)} className={`flex text-sm cursor-pointer rounded-md py-2 px-3 items-center justify-center text-white ${active ? 'bg-indigo-500' : 'bg-transparent'}`}>
      {icon}<span className="capitalize">&nbsp;{label}</span>
    </div>
  )
}

export default NavBarTab;