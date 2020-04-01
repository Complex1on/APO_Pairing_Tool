import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import DataCreate from './data/DataCreate';
import DataDelete from './data/DataDelete';
import DataEdit from './data/DataEdit';
import DataList from './data/DataList';
import DataShow from './data/DataShow';
import Header from './Header';
import { render } from 'react-dom';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={DataList} />
                            <Route
                                path="/data/new"
                                exact
                                component={DataCreate}
                            />
                            <Route
                                path="/data/edit"
                                exact
                                component={DataEdit}
                            />
                            <Route
                                path="/data/delete"
                                exact
                                component={DataDelete}
                            />
                            <Route
                                path="/data/show"
                                exact
                                component={DataShow}
                            />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
