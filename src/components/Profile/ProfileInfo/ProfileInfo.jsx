import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
const ProfileInfo = ({profile, status, updateStatus, isOwner,savePhoto}) => {

    if(!profile){
        return <Preloader/>
    }

    const onMainPhotoSelected=(e)=>{
if(e.target.files.length){
    savePhoto(e.target.files[0]);
}
    }
    return (
        <div>
            <div>
                <img className={s.profileImg} alt="some image"
                     src='https://w-dog.ru/wallpapers/10/2/548658425817633/ozero-derevya-gory.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )

}

export default ProfileInfo;



