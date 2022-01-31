
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState={
        messages: [
            {id: '1', message: 'Hi!'},
            {id: '2', message: 'How is yout IT learning'},
            {id: '3', message: 'good'},
            {id: '4', message: 'nice'},

        ],
        dialogs: [
            {id: '1', name: 'Svetlana'},
            {id: '2', name: 'Anna'},
            {id: '3', name: 'Pavel'},
            {id: '4', name: 'Kalina'},
            {id: '5', name: 'Alex'},
            {id: '6', name: 'Viktor'},
            {id: '7', name: 'Georgy'},
            {id: '8', name: 'Andrey'},
        ],
        newMessageBody: ''


    };
export const dialogsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: '5', message: body})
            return state;
        default:
            return state;
    }

}


export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export default dialogsReducer;