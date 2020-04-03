import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';

class DataDelete extends React.Component {
    render() {
        return (
            <Modal
                title="Delete Person"
                content="Need to replace this"
                onDismiss={() => history.push('/data/list')}
            />
        );
    }
}

export default DataDelete;
