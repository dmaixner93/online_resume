import WaylitLogo from '../static/waylit/svg/WaylitLogo';
import NavBarTabs from './NavBarTabs';
import ProfileDropdown from './ProfileDropdown';

const NavBar = () => {
  return (
    <nav className="bg-indigo-600 shadow-md rounded-md max-w-7xl w-full mx-auto py-3 px-2 sm:px-4 lg:px-6">
      <div className="relative xl:mx-auto flex items-center h-16">
        <WaylitLogo />
        <NavBarTabs />
        <ProfileDropdown />
      </div>
    </nav>
  );
};

export default NavBar;
