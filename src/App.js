import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes, useParams} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import { initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }


        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/" element={<ProfileContainer/>}/>
                        <Route path="/profile/:profileId" element={<ProfileContainer/>}/>
                        <Route path="/profile/" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/" element={<DialogsContainer/>}/>
                        <Route path="/users/" element={<UsersContainer/>}/>
                        <Route path="/login" element={<LoginPage/>}/>

                    </Routes>
                    {/*<Dialogs/>*/}
                </div>
                {/*<Profile />*/}
            </div>
        );
    }
}

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props} params={params}
        />
    );
};

const mapStateToProps=(state)=>({
    initialized: state.app.initialized
})
export default compose(
withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
