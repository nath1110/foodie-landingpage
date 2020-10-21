

import axios from "axios";
const API = "https://api.elaniin.dev";

export const GET_LOCATIONS = async (type) => {
    try {
        const result = await axios.get(API+'/api/locations',{
                params:{
                    type:type
                }
        }
        );
        return result
    } catch (error) {
        console.log("ERROR ", error);
        return error;
    }
}

export const GET_FILTERED_LOCATION = async (type,filter) => {
    try {
        const result = await axios.get(API+'/api/locations',{
            params:{
                type:type,
                query:filter
            }
        });
        return result
    } catch (error) {
        console.log("ERROR ", error);
        return error;
    }
}
export const GET_CATEGORIES= async ()=>{
    try{
        const result =await axios.get(API+'/api/categories');
        return result;
    }catch(error){
        console.log("ERROR ",error);
        return error;
    }
}

export const GET_MENU= async (page)=>{
    try{
        const result =await axios.get(API+'/api/menu'+page);
        return result;
    }catch(error){
        console.log("ERROR ",error);
        return error;
    }
}
export const GET_MENU_CATEGORY= async (id)=>{
    try{
        const result =await axios.get(API+'/api/menu',{
            params:{
                category:id
            }
        });
        return result;
    }catch(error){
        console.log("ERROR ",error);
        return error;
    }
}
export const GET_FILTERED_MENU= async (id,filter)=>{
    try{
        const result =await axios.get(API+'/api/menu',{
                category:id,
                query:filter
        });
        return result;
    }catch(error){
        console.log("ERROR ",error);
        return error;
    }
}

export const POST_CONTACT= async (name, email, message)=>{
    try{
        const result =await axios.post(API+'/api/contact',{
            "name": name,
            "email": email,
            "message": message
        });
        return result;
    }catch(error){
        console.log("ERROR ",error);
        return error;
    }
}