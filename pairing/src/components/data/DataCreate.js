import React from 'react';
import { Field, reduxForm, clearSubmitErrors } from 'redux-form';

class DataCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = formValues => {
        //console.log(formValues);

        this.props.onSubmit(formValues);
    };

    renderQuestions = (numQ, type) => {
        return numQ.map(el => {
            let labelText = `Enter ${type} ${el}`;
            let questionName = `${type}${el}`;

            return (
                <Field
                    key={questionName + el}
                    name={questionName}
                    component={this.renderInput}
                    label={labelText}
                />
            );
        });
    };
    render() {
        // Want to change renderQuestions Array to a prop
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field
                    name="name"
                    component={this.renderInput}
                    label="Enter Name"
                />

                {this.renderQuestions([1, 2, 3], 'Question')}
                {this.renderQuestions([1, 2, 3], 'Preference')}
                <button className="ui button primary" onSubmit={this.onSubmit}>
                    Submit
                </button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.name) {
        errors.name = 'You must enter a name';
    }

    if (!formValues.question1) {
        errors.question1 = 'You must enter a number value';
    }

    if (!formValues.question2) {
        errors.question2 = 'You must enter a number value';
    }

    if (!formValues.question3) {
        errors.question3 = 'You must enter a number value';
    }

    return errors;
};

export default reduxForm({
    form: 'dataCreate',
    validate
})(DataCreate);
