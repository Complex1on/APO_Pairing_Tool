import React from 'react';
import { Link } from 'react-router-dom';
import GoogleButton from './GoogleButton';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Alpha Phi Omega Psi Pairing Tool
            </Link>
            <div className="right menu">
                <Link to="/data/list" className="item">
                    All Data
                </Link>
                <GoogleButton />
            </div>
        </div>
    );
};

export default Header;
