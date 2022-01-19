import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/" element={<Profile posts={props.posts}/>}/>
                        <Route path="/dialogs/" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>

                    </Routes>
                    {/*<Dialogs/>*/}
                </div>
                {/*<Profile />*/}

            </div>
        </BrowserRouter>
    );
}


export default App;