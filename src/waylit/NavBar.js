import WaylitLogo from '../static/waylit/svg/WaylitLogo';
import NavBarTabs from './NavBarTabs';
import ProfileDropdown from './ProfileDropdown';

const NavBar = () => {
  return (
    <nav className="bg-indigo-600 dark:bg-gray-800 shadow-md rounded-md max-w-screen md:max-w-7xl w-full mx-auto py-1 lg:py-3 px-2 sm:px-4 lg:px-6">
      <div className="relative xl:mx-auto flex items-center h-16">
        <div className="hidden md:block">
          <WaylitLogo />
        </div>
        <div className="w-64 md:w-auto overflow-x-scroll">
          <NavBarTabs />
        </div>
        <div className="w-1/4 ml-auto md:w-auto">
          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
