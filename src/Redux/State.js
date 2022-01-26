let reRenderEntireTree = () => {
    console.log('state is changed');
}


let state = {
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

}
window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    reRenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    reRenderEntireTree(state);
}

export const subscribe = (observer) => {
    reRenderEntireTree = observer;
}
export default state;