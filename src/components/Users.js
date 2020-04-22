import React, {Component} from 'react'
import {findAllUsers} from "../services/UserService";
import {findAllUsersAction} from "../actions/userActions";
import {connect} from "react-redux";
import {WEBDEV_SERVER_URL} from "../common/constant";

class Users extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.findAllUsers()
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <div>
                    <h1>Users</h1>
                </div>
                <ul className={"list-group"}>
                    {this.props.users && this.props.users.map(user =>
                        <li key={user} className={"list-group-item"}>
                            <a href={`nuids/${user}/domains`}>
                                {user}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
const stateToPropertyMapper = (state) => ({
    users: state.users.users
});

const dispatchToPropertyMapper = (dispatch) => ({
    // createUser: (user) =>
    //     createUser(lessonId, user)
    //         .then(actualUser =>
    //             dispatch(createUserAction(actualUser))),
    findAllUsers: () =>
        findAllUsers()
            .then(users =>
                dispatch(findAllUsersAction(users)))

    // updateUser: (userId, user) => {
    //     updateUser(userId, user)
    //         .then(actualUser =>
    //             dispatch(updateUserAction(actualUser)))
    // },
    // deleteUser: (userId) => {
    //     deleteUser(userId)
    //         .then(status =>
    //             dispatch(deleteUserAction(userId)))
    //}
});

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(Users)