import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


 const maxLength10= maxLengthCreator(10)

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);
    let newPostElement = React.createRef();
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (

        <div className={s.postsBlock}>
            <h3>My Posts</h3>

            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
                <Post/>
                <Post/>
            </div>
        </div>)
}


const AddNewPostForm=(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"Post Message"} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button >Add post</button>
            </div>
            <div>
                <button>Remove</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);
export default MyPosts;

/*<div className={s.content}>
<div>
  <img src='https://w-dog.ru/wallpapers/10/2/548658425817633/ozero-derevya-gory.jpg'></img>
</div>
<div>
  avatar +description
</div>
</div>*/

