const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store={
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
        }

    },
    _callSubscriber(){
        console.log('state is changed');
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
if(action.type==='ADD-POST'){
    let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
} else if(action.type==='UPDATE-NEW-POST-TEXT'){
    this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state);
}
    }
}

export const addPostActionCreator=()=>({type:ADD_POST})
export const updateNewPostTextActionCreator=(text)=>({type: UPDATE_NEW_POST_TEXT, newText: text})

window.state = store;

export default store;