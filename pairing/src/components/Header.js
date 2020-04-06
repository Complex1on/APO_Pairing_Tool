import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import GoogleButton from './GoogleButton';

class Header extends React.Component {
    renderAllData() {
        if (this.props.auth) {
            return (
                <Link to="/data/list" className="item">
                    All Data
                </Link>
            );
        } else {
            return;
        }
    }
    render() {
        return (
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">
                    Alpha Phi Omega Psi Pairing Tool
                </Link>
                <div className="right menu">
                    {this.renderAllData()}
                    <GoogleButton />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, {})(Header);
