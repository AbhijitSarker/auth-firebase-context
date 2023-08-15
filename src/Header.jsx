import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <div className='ml-auto'>
                    {
                        user ?
                            <><span>{user.email}</span>
                                <button onClick={handleLogOut} className="btn btn-sm ml-5">Sign Out</button>

                            </>
                            : <Link to='/login'><button className='btn btn-active btn-link text-white'>Log In</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;