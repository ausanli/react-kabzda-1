import profileReducer, {addPostActionCreator,deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hi, How are you?', likesCount: 12},
        {id: 2, message: 'It is my first post!', likesCount: 10},
        {id: 3, message: 'good luck', likesCount: 2},
        {id: 4, message: 'thanks', likesCount: 8},

    ]
};
it('new post should be incremented', () => {
    let action= addPostActionCreator("it-kamasutra.com")
    let newState= profileReducer(state,action);
    expect(newState.posts.length). toBe(5);

});
it('message should be it kamasutra', () => {
    let action= addPostActionCreator("it-kamasutra.com")

    let newState= profileReducer(state,action);
    expect(newState.posts.length). toBe(5); expect(newState.posts[4].message). toBe("it-kamasutra.com");
});
it('after deleting length of messages should decrement', () => {
    let action= deletePost(1);

    let newState= profileReducer(state,action);

});
it('after deleting length of messages shouldnt be changed if id is incorrect', () => {
    let action= deletePost(1000);

    let newState= profileReducer(state,action);
    expect(newState.posts.length). toBe(4)
});
