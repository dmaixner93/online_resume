import Logo from './assets/Logo';

const Header = () => {
  return (
    <div className="absolute left-0 h-20 w-full dev-border">
      <div className="relative flex items-center w-full h-full dev-border">
        <div className="w-24 h-full flex justify-center items-center">
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default Header;