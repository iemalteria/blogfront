import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
    return (
        <main>
            <div className='main-nav-bar'>
                <Header/>
            </div>
            <div className='main-content'>
                <Outlet/>
            </div>
            <div className=''>
                <Footer/>
            </div>
        </main>
    )
}