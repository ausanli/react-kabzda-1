import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogs-reducer";


/*const MyPostsContainer = (props) => {
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
*/
const mapStateToProps=(state)=>{
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addPost:(newPostText)=>{
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

/*<div className={s.content}>
<div>
  <img src='https://w-dog.ru/wallpapers/10/2/548658425817633/ozero-derevya-gory.jpg'></img>
</div>
<div>
  avatar +description
</div>
</div>*/

