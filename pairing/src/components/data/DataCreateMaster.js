import React from 'react';
import { connect } from 'react-redux';
import { submitPerson } from '../../actions';
import DataCreate from './DataCreate';

class DataCreateMaster extends React.Component {
    onSubmit = (formValuues) => {
        this.props.submitPerson(formValuues);
    };

    render() {
        return (
            <div>
                <h3>Create a Person</h3>
                <DataCreate onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { submitPerson })(DataCreateMaster);
