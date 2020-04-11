import React from 'react';
import { Field, reduxForm, clearSubmitErrors } from 'redux-form';
import { connect } from 'react-redux';

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

    renderRadio = () => {
        return (
            <div className="inline fields">
                <label>Select Big or Little: </label>

                <Field
                    className="ui radio checkbox"
                    type="radio"
                    component="input"
                    name="type"
                    tabIndex="0"
                    value="big"
                />
                <label>Big</label>

                <Field
                    className="ui radio checkbox"
                    type="radio"
                    component="input"
                    name="type"
                    tabIndex="0"
                    value="little"
                />
                <label>Little</label>
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    renderQuestions = (numQ, type) => {
        return numQ.map((el) => {
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

    renderWeighted = (numQ) => {
        return numQ.map((el) => {
            return (
                <div key={'weighteded div' + el}>
                    <label>{'weighted' + el}</label>
                    <Field
                        key={'weighted' + el}
                        className="ui checkbox"
                        name={el + 'weighted'}
                        component="input"
                        type="checkbox"
                    />
                </div>
            );
        });
    };

    render() {
        let numberOfQuestions = [];
        if (this.props.editing === 'true') {
            // Calculates the number of questions needed to be rendered to edit
            // so no conflict between that and numQ user has selected
            const test = Object.keys(this.props.initialValues);
            test.forEach((el) => {
                if (el[0] === 'Q' && el[1] === 'u') {
                    numberOfQuestions.push(el[8]);
                }
            });
        } else {
            numberOfQuestions = this.props.numQ;
        }

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

                {this.renderRadio()}

                {this.renderQuestions(numberOfQuestions, 'Question')}
                {this.renderQuestions(numberOfQuestions, 'Preference')}
                <div className="inline fields">
                    {this.renderWeighted(numberOfQuestions)}
                </div>

                <button className="ui button primary" onSubmit={this.onSubmit}>
                    Submit
                </button>
            </form>
        );
    }
}

// Need to fix validation
const validate = (formValues) => {
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

const mapStateToProps = (state) => {
    return { numQ: state.numQ, person: state.people };
};

let dataCreateOne = connect(mapStateToProps, {})(DataCreate);

export default reduxForm({
    form: 'dataCreate',
    validate,
    enableReinitialize: true,
})(dataCreateOne);
