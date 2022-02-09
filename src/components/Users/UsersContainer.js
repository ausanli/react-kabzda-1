import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";

let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage:(pageNumber)=> {
        dispatch(setCurrentPageAC(pageNumber));
    },
        setTotalUsersCount:(totalCount)=> {
            dispatch(setTotalUsersCountAC(totalCount));
        },


    }
}
let UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);


export default UsersContainer;
