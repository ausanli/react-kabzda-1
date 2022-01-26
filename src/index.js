import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './Redux/State'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './Redux/State'
import {BrowserRouter} from "react-router-dom";

let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                />
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
}
reRenderEntireTree(state);
subscribe(reRenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
