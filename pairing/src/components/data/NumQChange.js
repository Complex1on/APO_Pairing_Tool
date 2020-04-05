import React from 'react';

class NumQChange extends React.Component {
    render() {
        return (
            <form
                className="ui input"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field
                    name="numField"
                    component={this.renderInput}
                    label="Change Number of Questions"
                />
                <button className="ui button primary" onSubmit={this.onSubmit}>
                    Change
                </button>
            </form>
        );
    }
}

export default NumQChange;
