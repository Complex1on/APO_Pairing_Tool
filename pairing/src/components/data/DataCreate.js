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

    onSubmit(formValues) {
        console.log(formValues);
    }

    renderQuestions = numQ => {
        let string = '';
        let temp;
        for (let i = 0; i < numQ; i++) {
            temp = ``;
        }
    };
    render() {
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
                <Field
                    name="question1"
                    component={this.renderInput}
                    label="Enter Question 1"
                />
                <Field
                    name="question2"
                    component={this.renderInput}
                    label="Enter Quesiton 2"
                />
                <Field
                    name="question3"
                    component={this.renderInput}
                    label="Enter Question 3"
                />
                <button className="ui button primary">Submit</button>
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
