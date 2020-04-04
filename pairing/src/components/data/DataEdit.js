import React from 'react';
import { connect } from 'react-redux';
import { fetchPerson, editPerson } from '../../actions';
import DataCreate from './DataCreate';

class DataEdit extends React.Component {
    componentDidMount() {
        this.props.fetchPerson(this.props.match.params.personId);
    }

    onSubmit = (formValues) => {
        this.props.editPerson(this.props.match.params.personId, formValues);
    };

    createInitialValues = () => {
        let initVals = {};
        Object.keys(this.props.person).map((key) => {
            const value = this.props.person[key];

            initVals.name = value.name;
            initVals.type = value.type;
            for (let i = 0; i < value.questions.length; i++) {
                let j = `Question${i + 1}`;
                initVals[j] = value.questions[i];
            }

            for (let i = 0; i < value.preferences.length; i++) {
                let j = `Preference${i + 1}`;
                initVals[j] = value.preferences[i];
            }
        });

        return initVals;
    };

    render() {
        if (!this.props.person) {
            return <div>Loading...</div>;
        }
        let vals = this.createInitialValues();
        return (
            <div>
                <h3>Edit a Person's Data</h3>
                <DataCreate
                    onSubmit={this.onSubmit}
                    initialValues={vals}
                    editing="true"
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        person: state.people,
        numQ: state.numQ,
    };
};

export default connect(mapStateToProps, { fetchPerson, editPerson })(DataEdit);
