import React from 'react';
import store from "./Redux/ReduxStore";

const storeContext = React.createContext(null);

export const Provider=(props)=>{
    return   <storeContext.Provider value ={props.store}>
        {props.children}
        </storeContext.Provider>
}

export default storeContext;