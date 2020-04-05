import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople, editNumQ } from '../../actions';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class DataList extends React.Component {
    componentDidMount() {
        this.props.fetchPeople();
    }

    onSubmit = (formValue) => {
        this.props.editNumQ(formValue);
    };

    renderPeople = (peopleObj) => {
        return Object.keys(peopleObj).map((key) => {
            const value = peopleObj[key];
            return (
                <div className="item" key={value._id}>
                    <div className="content">
                        <h1 className="header">{value.name}</h1>
                        <div className="description">
                            questions {value.questions} ||| preferences
                            {value.preferences}
                            <div className="right floated content">
                                <Link
                                    to={`/data/edit/${value._id}`}
                                    className="ui button primary"
                                >
                                    Edit
                                </Link>
                                <Link
                                    to={`/data/delete/${value._id}`}
                                    className="ui button negative"
                                >
                                    Delete
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    renderCreate() {
        return (
            <div style={{ textAlign: 'right' }}>
                <Link to="/data/new" className="ui button primary">
                    Add a Person
                </Link>
            </div>
        );
    }

    renderInput = ({ input, label }) => {
        return (
            <div className="ui input">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    };

    render() {
        return (
            <div className="ui container">
                <form
                    className="ui input"
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                    <Field
                        name="numField"
                        component={this.renderInput}
                        label="Change Number of Questions"
                    />
                    <button
                        className="ui button primary"
                        onSubmit={this.onSubmit}
                    >
                        Change
                    </button>
                </form>
                <h1>Your Data List</h1>
                <Link to="/data/show" className="ui button primary">
                    Calculate List
                </Link>
                <div className="ui celled list">
                    {this.renderPeople(this.props.people)}
                </div>

                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.people,
        numQ: state.numQ,
        initialValues: { numField: state.numQ.length },
    };
};
const DataList1 = reduxForm({
    form: 'numQ',
})(DataList);

export default connect(mapStateToProps, { fetchPeople, editNumQ })(DataList1);
