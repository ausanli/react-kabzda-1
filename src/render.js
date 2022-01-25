import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {addPost, updateNewPostText} from './Redux/State'
import {BrowserRouter} from "react-router-dom";


export let reRenderEntireTree=(state)=>{
  ReactDOM.render(
      <BrowserRouter>
        <React.StrictMode>
          <App state={state}
               addPost ={addPost}
               updateNewPostText={updateNewPostText}
          />
        </React.StrictMode>
      </BrowserRouter>   , document.getElementById('root')
  );
}

