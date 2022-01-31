import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (

        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                <button>Remove</button>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postsElements}
                <Post/>
                <Post/>
            </div>
        </div>)


}

export default MyPosts;

/*<div className={s.content}>
<div>
  <img src='https://w-dog.ru/wallpapers/10/2/548658425817633/ozero-derevya-gory.jpg'></img>
</div>
<div>
  avatar +description
</div>
</div>*/

