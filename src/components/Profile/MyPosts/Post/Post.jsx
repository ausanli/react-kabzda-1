import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (

        <div className={s.item}>
            <img src='https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'/>
            {props.message}
            <div>
                <span>likes {props.likeCount}</span>
            </div>
        </div>
    )

}

export default Post;



