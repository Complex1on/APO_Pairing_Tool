import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import history from '../history';
import DataCreateMaster from './data/DataCreateMaster';
import DataDelete from './data/DataDelete';
import DataEdit from './data/DataEdit';
import DataList from './data/DataList';
import DataShow from './data/DataShow'; //Think about what to do about show
import Header from './Header';
import Landing from './Landing';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Landing} />
                            <Route
                                path="/data/new"
                                exact
                                component={DataCreateMaster}
                            />
                            <Route
                                path="/data/edit/:personId"
                                exact
                                component={DataEdit}
                            />
                            <Route
                                path="/data/delete/:personId"
                                exact
                                component={DataDelete}
                            />
                            <Route
                                path="/data/list"
                                exact
                                component={DataList}
                            />
                            <Route
                                path="/data/show"
                                exact
                                component={DataShow}
                            />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default connect(null, actions)(App);
