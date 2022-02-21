import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {useParams} from "react-router-dom";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = 2;
        if (this.props.params.profileId) {
            userId = this.props.params.profileId;
        }

        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>

        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props} params={params}
        />
    );
};


let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);



