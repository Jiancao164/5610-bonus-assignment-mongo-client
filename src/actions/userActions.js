export const FIND_ALL_USERS = "FIND_ALL_USERS";
export const findAllUsersAction = (users) => ({
    users: users,
    type: FIND_ALL_USERS
});

export const CREATE_USER = "CREATE_USER";
export const createUserAction = (user) => ({
    type: CREATE_USER,
    user: user
});
export const UPDATE_USER = "UPDATE_USER";
export const updateUserAction = (user) => ({
    type: UPDATE_USER,
    user: user
});
export const DELETE_USER = "DELETE_USER";
export const deleteUserAction = (userId) => ({
    type: DELETE_USER,
    userId: userId
});
