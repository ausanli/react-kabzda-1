import React from 'react';
import styles from './users.module.css'

let Users =(props)=>{

    if(props.users.length===0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://pbs.twimg.com/media/DYfwnKOXUAEgTc2.jpg',
                followed: false,
                fullName: 'Anna',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoURL: 'https://pbs.twimg.com/media/DYfwnKOXUAEgTc2.jpg',
                followed: true,
                fullName: 'Pavel',
                status: 'I am an employee',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoURL: 'https://pbs.twimg.com/media/DYfwnKOXUAEgTc2.jpg',
                followed: true,
                fullName: 'Igor',
                status: 'I am a student',
                location: {city: 'Sofia', country: 'Bulgaria'}
            },
            {
                id: 4,
                photoURL: 'https://pbs.twimg.com/media/DYfwnKOXUAEgTc2.jpg',
                followed: false,
                fullName: 'Kalina',
                status: 'I am a mother',
                location: {city: 'Kiev', country: 'Ukraine'}
            },


        ],)

    }
    return <div>
        {props.users.map(u=><div key={u.id}>
<span>
    <div>
        <img src ={u.photoURL} className={styles.userPhoto}/>
    </div>
    <div>
        {u.followed ?<button onClick={()=>{props.unfollow(u.id)}}>UNFOLLOW</button>: <button onClick={()=>{props.follow(u.id)}}>FOLLOW</button>}

    </div>
</span>
<span>
    <span>
        <div>{u.fullName}</div>
        <div>{u.status}</div>
    </span>
    <span>
        <div>{u.location.country}</div>
        <div>{u.location.city}</div>
    </span>
</span>
        </div>)}
    </div>

}

export default Users;