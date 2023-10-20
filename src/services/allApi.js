import { base_URL } from "./baseUrl";
import { commonAPI } from "./commonApi";

export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${base_URL}/register`,user,"")
}

export const loginAPI = async (user)=>{
    return await commonAPI("POST",`${base_URL}/login`,user,"")
}

export const updateProfile = async (id,user,updateHeader)=>{
    return await commonAPI("POST",`${base_URL}/update-user/${id}`,user,updateHeader)
}