import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import storeContext from "../../../StoreContext";


const MyPostsContainer = (props) => {
    return (
        <storeContext.Consumer>
            {(store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        //let text = newPostElement.current.value;
                        //let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }
                    return <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 posts={store.getState().profilePage.posts}
                                 newPostText={store.getState().profilePage.newPostText}/>
                }

            }
        </storeContext.Consumer>
    )

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

