import Tooltip from '@material-ui/core/Tooltip';
import Logo from './assets/Logo';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="fixed left-0 h-20 w-full">
      <div className="relative grid grid-cols-6 items-center w-full h-full">
        <div className="col-span-1 pl-8 h-full flex justify-start items-center">
          <Logo />
        </div>
        <div className="col-span-1 pr-8 col-start-6 h-full flex justify-end items-center">
          <Tooltip
            placement="bottom-start"
            aria-label="Toggle light/dark theme"
            title="Toggle light/dark theme">
            <ThemeToggle />
          </Tooltip>
        </div>
      </div>
    </header>
  )
}

export default Header;