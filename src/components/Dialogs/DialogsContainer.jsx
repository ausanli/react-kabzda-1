import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage

    }
}
let mapDispatchToProps = (dispatch) => {


    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }

    }
}



/*let AuthRedirectComponent= withAuthRedirect(Dialogs);

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);*/

export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs);