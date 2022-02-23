import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



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
const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props} params={params}
        />
    );
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect)(ProfileContainer);

/*let AuthRedirectComponent= withAuthRedirect(ProfileContainer);



let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);*/



