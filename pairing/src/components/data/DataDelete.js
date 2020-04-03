import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePerson } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class DataDelete extends React.Component {
    renderActions() {
        const id = this.props.match.params.personId;
        console.log(id);
        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deletePerson(id)}
                    className="ui button negative"
                >
                    Delete
                </button>
                <Link to="/" className="ui button">
                    Cancel
                </Link>
            </React.Fragment>
        );
    }

    render() {
        return (
            <Modal
                title="Delete Person"
                content="Need to replace this"
                actions={this.renderActions()}
                onDismiss={() => history.push('/data/list')}
            />
        );
    }
}

export default connect(null, { deletePerson })(DataDelete);
