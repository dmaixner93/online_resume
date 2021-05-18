import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Container } from '@material-ui/core';
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
        <AppBar elevation={0} className="border-b border-gray-200 dark:border-gray-700 dark:border-opacity-70" color="transparent">
         <div className="flex items-center bg-gray-50 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 min-h-56">
           <div className="text-left px-4">
            { homePage ? <Logo /> :
              (<Link to="/">
                <ArrowBackIcon className="opacity-80 cursor-pointer hover:opacity-100" />
              </Link>)
            }
           </div>
           <Container className="text-left">
             <h3 className="font-semibold tracking-tight text-xl">{ pageTitle ? pageTitle : null }</h3>
           </Container>
           <div className="text-right px-4">
            <ThemeToggle />
           </div>
         </div>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}

export default Header;