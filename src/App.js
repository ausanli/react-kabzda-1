import React from 'react';
import { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes, Switch, useParams} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/ReduxStore";

/*import DialogsContainer from "./components/Dialogs/DialogsContainer";*/
const DialogsContainer = lazy(()=>
    import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
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


                        <Route path="/dialogs/" element={<Suspense fallback={<Preloader/>}><DialogsContainer/></Suspense>}/>


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

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
let AppContainer= compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp=(props)=>{
    return (<BrowserRouter>
        <Provider store ={store}>
            <React.StrictMode>
                <AppContainer/>
            </React.StrictMode>

        </Provider>
    </BrowserRouter>)
}

export default SamuraiJSApp;