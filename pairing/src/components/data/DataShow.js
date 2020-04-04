import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from '../../actions';
import { Link } from 'react-router-dom';

const calculateTotal = (littles, bigs) => {
    let allData = [];

    littles.forEach((el) => {
        allData.push(calculatePerson(el, bigs));
    });

    bigs.forEach((el) => {
        allData.push(calculatePerson(el, littles));
    });

    return allData;
};

const calculatePerson = (person, oppositeList) => {
    // Uses the preferences of person and the questions of opposite list
    // to create potential bigs/littles list

    let final = [];
    let tempBigScore = 0;

    // cycling through the opposite list
    for (let i = 0; i < oppositeList.length; i++) {
        tempBigScore = 0;
        for (let j = 0; j < person.questions.length; j++) {
            // cycling through the preference question of person and question of opposite
            // adding to tempBigScore
            let temp = person.preferences[j] - oppositeList[i].questions[j];
            temp = 10 - Math.abs(temp);
            tempBigScore += temp;
        }
        // finish calculating tempBigScore
        final.push({ Name: oppositeList[i].name, Score: tempBigScore });
    }

    // sorting final list based on score
    final.sort((a, b) => (a.Score < b.Score ? 1 : -1));

    //returning person's name and person's list
    return { name: person.name, list: final };
};

class DataShow extends React.Component {
    componentDidMount() {
        this.props.fetchPeople();
    }

    splitTwoGroups = () => {
        let split = {};
        split.bigs = [];
        split.littles = [];
        Object.keys(this.props.people).map((key) => {
            const value = this.props.people[key];
            if (value.type === 'big') {
                split.bigs.push(value);
            } else if (value.type === 'little') {
                split.littles.push(value);
            }
        });
        return split;
    };

    renderIndivList = (listObj) => {
        return listObj.map((el) => {
            return (
                <div key={el.Name + el.Score}>
                    <p>
                        {el.Name} Score: {el.Score}
                    </p>
                </div>
            );
        });
    };

    renderList = (lis) => {
        return Object.keys(lis).map((key) => {
            const value = lis[key];
            return (
                <div key={value.name}>
                    <h1>{value.name}'s List</h1>
                    {this.renderIndivList(value.list)}
                </div>
            );
        });
    };

    render() {
        const bigsAndLittles = this.splitTwoGroups();
        const list = calculateTotal(
            bigsAndLittles.littles,
            bigsAndLittles.bigs
        );

        return (
            <div className="ui">
                <h1>Calculated List</h1>
                {this.renderList(list)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.people,
        auth: state.auth,
        numQ: state.numQ,
    };
};

export default connect(mapStateToProps, { fetchPeople })(DataShow);
