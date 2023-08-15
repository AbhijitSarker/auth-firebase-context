import React, { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h2>Home</h2>
            <h3>{user && <span>{user.displayName}</span>}</h3>
        </div>
    );
};

export default Home;