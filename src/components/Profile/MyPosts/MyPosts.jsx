import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements=props.posts.map(p=><Post message={p.message} likeCount={p.likesCount}/>);
    return (

        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
            <button>Add post</button>
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

