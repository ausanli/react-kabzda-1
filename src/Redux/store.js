import profileReducer from "./profile-reducer";
import dialogs from "../components/Dialogs/Dialogs";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, How are you?', likesCount: 12},
                {id: 2, message: 'It is my first post!', likesCount: 10},
                {id: 3, message: 'good luck', likesCount: 2},
                {id: 4, message: 'thanks', likesCount: 8},

            ],
            newPostText: 'it-kamasutra.com'

        },
        dialogsPage: {
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


        },
        sidebar:{}

    },
    _callSubscriber() {
        console.log('state is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar=sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);


    }
}



window.state = store;

export default store;