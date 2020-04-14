import {Helper} from './urlApi';
import axios from 'axios';

export const signUp = async ({username,password,fullName='',email=''})=>{
const registertionData = await axios.post(Helper.registerUrl,{
    username:username,
    password:password,
    email:email,
    full_name:fullName,
    });
return registertionData;
};
export const login = async ({username,password})=>{
    const siginData = await axios.post(Helper.authorizationUrl,{
        username:username,
        password:password,
    });
    return siginData;
}