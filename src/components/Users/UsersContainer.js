import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";

let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let MapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }

    }
}
let UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);


export default UsersContainer;
