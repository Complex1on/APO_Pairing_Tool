import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from '../../actions';

class DataList extends React.Component {
    componentDidMount() {
        this.props.fetchPeople();
    }

    renderPeople = peopleObj => {
        console.log('people obj');
        console.log(peopleObj);

        return Object.keys(peopleObj).map(key => {
            const value = peopleObj[key];
            return (
                <div className="item" key={value.name + value.id}>
                    <div className="content">
                        <h1 className="header">{value.name}</h1>
                        <div className="description">
                            <h4>questions</h4> {value.questions}
                            <h4>preferences</h4> {value.preferences}
                        </div>
                    </div>
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                <h1>Tesing Data List</h1>
                <div className="ui list">
                    {this.renderPeople(this.props.people)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        people: state.people
    };
};
export default connect(mapStateToProps, { fetchPeople })(DataList);
