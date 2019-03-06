import http from '../utils/http';
export const  register = (param)=>http("post","/user/user/register",param)