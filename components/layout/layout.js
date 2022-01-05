import { Fragment } from 'react';

import MainNavigation from './main-navigation';
// import Footer from './footer'
function Layout(props) {
    return (
        <div >
            <MainNavigation />
            <main>{props.children}</main>
            {/* <Footer /> */}
        </div>
    );
}

export default Layout;
