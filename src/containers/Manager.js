import {Component} from "react";
import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Users from "../components/Users";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import users from "../reducers/users"
import domains from "../reducers/domains"
import Domains from "../components/Domains";
import Documents from "../components/Documents";
import documents from "../reducers/documents";



class Manager extends Component{
    render() {
        const reducers = combineReducers({
            users, domains, documents
        });
        const store = createStore(reducers);

        return (
            <Provider store={store}>
                <div className="container-fluid">
                    <Router>


                        <Route
                            path="/"
                            exact={true}
                            render={(props) =>
                                <Users
                                    {...props}/>
                            }/>
                        <Route
                            path={`/nuids/:nu_id/domains`}
                            exact={true}
                            render={(props) =>
                                <Domains
                                    {...props}/>
                            }/>
                        <Route
                            path={`/nuids/:nu_id/domains/:collection_id`}
                            exact={true}
                            render={(props) =>
                                <Documents
                                    {...props}/>
                            }/>

                        {/*<Route*/}
                        {/*path={"/movies/:latestTitleSearch"}*/}
                        {/*exact={true}*/}
                        {/*component={HomeHeading}/>*/}
                        {/*<Route*/}
                        {/*path="/login"*/}
                        {/*exact={true}*/}
                        {/*render={(props) =>*/}
                        {/*<LoginHeading history={props.history}/>*/}
                        {/*}/>*/}
                        {/*<Route*/}
                        {/*path="/register"*/}
                        {/*exact={true}*/}
                        {/*render={(props) =>*/}
                        {/*<SignUp history={props.history}/>*/}
                        {/*}/>*/}
                        {/*<Route*/}
                        {/*path="/profile"*/}
                        {/*exact={true}*/}
                        {/*render={(props) =>*/}
                        {/*<Profile history={props.history}/>*/}
                        {/*}/>*/}
                        {/*<Route*/}
                        {/*path="/profile/:username"*/}
                        {/*exact={true}*/}
                        {/*render={(props) =>*/}
                        {/*<AnonymousUser*/}
                        {/*{...props}*/}
                        {/*history={props.history}/>*/}
                        {/*}/>*/}
                        {/*<Route*/}
                        {/*path={`/movies/title/:movie_id`}*/}
                        {/*exact={true}*/}
                        {/*component={MovieDetails}/>*/}
                    </Router>
                </div>
            </Provider>
        )
    }
}

export default Manager