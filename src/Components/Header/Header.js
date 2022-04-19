import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = (props) => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className="text-center navber sticky-top">
            <nav className='py-3 bg-light d-flex justify-content-around'>
                <div>
                    <Link to="/home">HOME</Link>
                    <Link to="/blogs">BLOGS</Link>
                    <Link to="/about">ABOUT</Link>
                </div>
                <div>
                    {
                        user ?
                            <Link to="/login" onClick={handleSignOut}>SIGN OUT</Link>
                            :
                            <>
                                <Link to="/login">LOGIN</Link>
                                <Link to="/register">REGISTER</Link>
                            </>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;