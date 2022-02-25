
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



    };
export const dialogsReducer=(state=initialState,action)=>{
    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return{...state,
                messages:[...state.messages, {id: '5',message:body}],

            };
        default:
            return state;
    }

}


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;