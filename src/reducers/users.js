import {CREATE_USER, DELETE_USER, FIND_ALL_USERS, UPDATE_USER} from "../actions/userActions";

const userReducer = (state = {users: []}, action) => {
    switch(action.type) {
        case CREATE_USER:
            return {
                users: [
                    ...state.users,
                    action.user
                ]
            };
        case FIND_ALL_USERS:
            return {
                users: action.users
            };
        case UPDATE_USER:
            return {
                users: state.users.map(user =>
                    user._id === action.userId ? action.user : user
                )
            };
        case DELETE_USER:
            return {
                users: state.users.filter(user =>
                    user._id !== action.userId
                )
            };
        default:
            return state
    }
};

export default userReducer
