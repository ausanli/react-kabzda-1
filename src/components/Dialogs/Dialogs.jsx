import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let dialogs = [
        {id: '1', name: 'Svetlana'},
        {id: '2', name: 'Anna'},
        {id: '3', name: 'Pavel'},
        {id: '4', name: 'Kalina'},
        {id: '5', name: 'Alex'},
        {id: '6', name: 'Viktor'},
        {id: '7', name: 'Georgy'},
        {id: '8', name: 'Andrey'},
    ];
    let messages
        = [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'How is yout IT learning'},
        {id: '3', message: 'good'},
        {id: '4', message: 'nice'},

    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;