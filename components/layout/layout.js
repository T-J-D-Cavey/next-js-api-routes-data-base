import { Fragment } from 'react';

<<<<<<< HEAD
import MainNavigation from './main-navigation';
=======
import MainHeader from './main-header';
>>>>>>> my-local-branch

function Layout(props) {
  return (
    <Fragment>
<<<<<<< HEAD
      <MainNavigation />
=======
      <MainHeader />
>>>>>>> my-local-branch
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
