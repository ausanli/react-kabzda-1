import * as axios from "axios";

const instance=axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY":"929a14ef-e465-4b0c-b6db-11d4bb612e51"}
});


export const usersAPI= {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => {
            return response.data
        });
    },

    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please, use profileAPI object')
   return profileAPI.getProfile(userId);
},

}

export const profileAPI= {

    getProfile(userId){

        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`status/`+ userId);
    },
    updateStatus(status){
        return instance.put(`status/`, {status: status});
    }

}

export const authAPI= {
    me(){
       return instance.get(`auth/me`)

    }

}

