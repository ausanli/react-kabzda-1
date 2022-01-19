import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, How are you?', likesCount: 12},
        {id: 2, message: 'It is my first post!', likesCount: 10},
        {id: 3, message: 'good luck', likesCount: 2},
        {id: 4, message: 'thanks', likesCount: 8},

    ];

    let postsElements=posts.map(p=><Post message={p.message} likeCount={p.likesCount}/>);
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

