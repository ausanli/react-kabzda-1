import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        //let text = newPostElement.current.value;
        //let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>)

}

export default MyPostsContainer;

/*<div className={s.content}>
<div>
  <img src='https://w-dog.ru/wallpapers/10/2/548658425817633/ozero-derevya-gory.jpg'></img>
</div>
<div>
  avatar +description
</div>
</div>*/

