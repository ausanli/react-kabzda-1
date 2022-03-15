import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../Redux/profile-reducer";
import { useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component {

    refreshProfile(){
        let userId = this.props.params.profileId;
        if(!userId){
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login")
            }
        }

        this.props.getUserProfile(userId);

        this.props.getStatus(userId);
    }
    componentDidMount() {
        /*let userId = this.props.authorizedUserId;
        if (this.props.params.profileId) {
            userId = this.props.params.profileId;
        }*/
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.params.userId !=prevProps.params.userId) {
            this.refreshProfile();
        }
    }

    render() {


        return (
            <Profile {...this.props}
                isOwner ={!this.props.params.userId}
                     profile={this.props.profile}
                     status = {this.props.status}
                     updateStatus ={this.props.updateStatus}
                     savePhoto ={this.props.savePhoto}
            />

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
    status: state.profilePage. status,
    authorizedUserId: state. auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect)(ProfileContainer);

/*let AuthRedirectComponent= withAuthRedirect(ProfileContainer);



let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);*/



