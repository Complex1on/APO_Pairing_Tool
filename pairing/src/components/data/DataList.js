import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from '../../actions';
import { Link } from 'react-router-dom';

class DataList extends React.Component {
    componentDidMount() {
        this.props.fetchPeople();
    }

    renderPeople = peopleObj => {
        return Object.keys(peopleObj).map(key => {
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

    render() {
        return (
            <div>
                <h1>Tesing Data List</h1>
                <div className="ui celled list">
                    {this.renderPeople(this.props.people)}
                </div>
                {this.renderCreate()}
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
