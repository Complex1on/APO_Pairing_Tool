import React from 'react';
import { connect } from 'react-redux';

class GoogleAuth extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <a className="ui" href="/auth/google">
                        Login with Google
                    </a>
                );
            default:
                return (
                    <a className="ui" href="/api/logout">
                        logout
                    </a>
                );
        }
    }
    render() {
        //console.log(this.props);
        return (
            <button className="ui red google button">
                <i className="google icon" />
                {this.renderContent()}
            </button>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(GoogleAuth);
