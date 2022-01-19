import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div >
      <div>
        <img className={s.profileImg} alt="some image" src='https://w-dog.ru/wallpapers/10/2/548658425817633/ozero-derevya-gory.jpg'/>
      </div>
      <div className={s.descriptionBlock}>
        avatar +description
      </div>

    </div>
  )

}

export default ProfileInfo;



