import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Logo from './assets/Logo';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({target: window});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = ({ homePage, pageTitle, ...props }) => {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar elevation={0} color="transparent">
         <div className="bg-true-gray-100 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90  grid grid-cols-6 items-center">
           <div className="col-span-1 text-left px-4">
            { homePage ? <Logo /> :
              (<Link to="/">
                <ArrowBackIcon className="opacity-80 cursor-pointer hover:opacity-100" />
              </Link>)
            }
           </div>
           <div className="col-span-4 text-center">
            { pageTitle ? pageTitle : null }
           </div>
           <div className="col-span-1 text-right px-4">
            <ThemeToggle />
           </div>
         </div>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}

export default Header;